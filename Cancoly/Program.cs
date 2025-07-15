
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.ML;
using Microsoft.OpenApi.Models;
using Microsoft.ML.Data;
using Cancoly;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.FileProviders;
using Cancoly.Persistence.Seeder;
using Cancoly.Domain.Entities;
using Cancoly.Persistence.Context;
using Cancoly.Application.IRepository;
using Cancoly.Persistence.Repository;
using Cancoly.Application.IRepository.All;
using Cancoly.Persistence.Repository.All;
using Cancoly.Application.Common.Workers;
using Cancoly.Application;
using Cancoly.Application.Features;
using DinkToPdf.Contracts;
using DinkToPdf;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.Http.Features;
using Cancoly.Persistence;
using Microsoft.ML;
using Microsoft.AspNetCore.StaticFiles;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
bool production = false;
bool seeder = true;

var env = (production ? "ProductionConnection" : "DefaultConnection");
var connectionString = builder.Configuration.GetConnectionString(env) ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

builder.Services.ConfigureApplication();

builder.Services.ConfigurePersistence(connectionString);

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddIdentity<ApplicationUser, ApplicationRole>(options => options.SignIn.RequireConfirmedAccount = false)
    .AddRoles<ApplicationRole>()
    .AddDefaultTokenProviders()
    .AddEntityFrameworkStores<ApplicationDbContext>();

builder.Services.AddHttpClient();

builder.Services.AddRazorPages();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromDays(7);
    options.IOTimeout = Timeout.InfiniteTimeSpan;
});

builder.Services.AddHttpContextAccessor();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.AccessDeniedPath = new PathString("/account-lockout");
    options.Cookie.Name = "Cookie";
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromDays(7);
    options.LoginPath = new PathString("/account-login");
    options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
    options.SlidingExpiration = true;
});
 
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSingleton(typeof(IConverter), new SynchronizedConverter(new PdfTools()));

builder.Services.AddLogging(x =>
{
    x.AddConsole();
    x.AddDebug();
    x.AddTraceSource("Information, ActivityTracing");
});

builder.Services.AddAuthentication();
builder.Services.AddAuthorization();
builder.Services.AddControllers();
builder.Services.Configure<FormOptions>(options =>
{
    options.ValueLengthLimit = int.MaxValue;
    options.MultipartBodyLengthLimit = int.MaxValue;
    options.MemoryBufferThreshold = int.MaxValue;
});

var app = builder.Build();


//seed models to database & server
using (var scope = app.Services.CreateScope())
{
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    
    if(seeder)
    {
        MainSeeder.SeedData(userManager, roleManager, dbContext);
    } 
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseStaticFiles();

var provider = new FileExtensionContentTypeProvider();
provider.Mappings[".dcm"] = "application/dicom";

app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot", "storage")),
    RequestPath = new PathString("/storage"),
    ContentTypeProvider = provider
});

app.UseDirectoryBrowser(new DirectoryBrowserOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "storage")),
    RequestPath = "/storage"
});


app.UseSession();

app.MapControllers();

app.UseAuthentication();

app.UseAuthorization();

app.UseCookiePolicy();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
