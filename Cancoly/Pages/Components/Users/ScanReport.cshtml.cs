using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using DinkToPdf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using PayStack.Net;
using System.Security.Policy;
using static Tensorflow.TensorShapeProto.Types;

namespace Cancoly.Pages.Components.Users
{
    [Authorize]
    public class ScanReportModel : PageModel
    {
        private IUnitOfWork _unitOfWork;
        private UploadFileService _fileService;
        private UserManager<ApplicationUser> _userManager;

        public ScanReportModel(
            UploadFileService fileService,
             IUnitOfWork unitOfWork,
             UserManager<ApplicationUser> userManager
            )
        {
            _fileService = fileService;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }

        public string Id { get; set; }
        
        public bool Status { get; set; }

        public int complete { get; set; }

        public int pending { get; set; }

        public List<ScanUpload> uploads { get; set; }
       
        public ScanUpload current { get; set; }

        public BrainScan Scan { get; set; }
        
        public ApplicationUser Appuser { get; set; }
        
        public async Task OnGet([FromQuery] string Id)
        {
            try
            {
                this.Id = Id;
                Scan = await _unitOfWork.BrainScanRepository.Get(Guid.Parse(Id));
                Appuser = await _userManager.FindByNameAsync(User.Identity.Name);
                Status = Scan.isComplete;
                uploads = await _unitOfWork.ScanUploadRepository.Query()
                                            .Where(x => x.BrainScanId == Scan.Id)
                                            .ToListAsync();
                current = uploads[0] ?? null;


            }
            catch (Exception ex)
            { 
                Console.WriteLine(ex);
            }
        }
        
        public async Task<IActionResult> OnPost()
        {
            try
            {
                var id = Request.Form["id"];
                Scan = await _unitOfWork.BrainScanRepository.Get(Guid.Parse(id));
                Appuser = await _userManager.FindByNameAsync(User.Identity.Name);
                string Construct = null;

                var converter = new BasicConverter(new PdfTools());
                var doc = new HtmlToPdfDocument();

                byte[] pdf;

                await Task.Run(async () =>
                {
                    for (int i = 0; i < Scan.FilePaths.Split(',').Length; i++)
                    {

                        Construct += $@"
                        <div class=""row p-3 mb-2 border align-items-center"">
                                <div class=""col-md-3 mb-2"">
                                    <img src = ""{Request.Scheme}://{Request.Host}/{Scan.FilePaths.Split(',')[i]}"" style=""height:300px;"" class=""img-fluid"">
                                </div>
                                <div class=""col-md-9"">
                                    <span>
                                        {Scan.Score.Split(",")[i]} % of {Scan.Label.Split(',')[i].Replace("_", " ")}
                                        {AnalyzeSeverity(double.Parse(Scan.Score.Split(',')[i]), Scan.Label.Split(",")[i].Replace("_", " "))}
                                    </span>
                                </div>
                            </div>
                            ";

                    }

                    var logo = $"{Request.Scheme}://{Request.Host}/logo.png";
                    var body = $@"<!DOCTYPE html>
                            <html lang=""en"">
                            <head>
                                <meta charset=""UTF-8"">
                                <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                                <title>Scan Report</title>
                                <link href=""https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"" rel=""stylesheet"">
                            </head>
                            <body>
                                <div class=""container-xxl flex-grow-1 container-p-y"">
                                    <div class=""d-flex align-items-center justify-content-between"">
                                        <div class=""logo-placeholder mb-3"">
                                            <!-- Space for Logo -->
                                            <img src=""{logo}"" alt=""Logo"" style=""height:50px;"">
                                        </div>
            
                                    </div>

                                    <h4 class=""fw-bold py-3 mb-4"">
                                        Scan Report #{(string.Join("", id.Take(8)))}
                                    </h4>

                                    <div class=""row"">
                                        <div class=""col-12"">
                                            <div class=""card mb-4"">
                                                <h3 class=""card-header text-uppercase"">
                                                    {Scan.Title}
                                                </h3>

                                                <div class=""card-body"">
                                                    <div class=""row p-3 border mb-2"">
                                                        <div class=""col-md-6 mb-2"">
                                                            <p><strong>First Name: </strong>{Appuser.FirstName}</p>
                                                        </div>
                                                        <div class=""col-md-6 mb-2"">
                                                            <p><strong>Last Name: </strong>{Appuser.LastName}</p>
                                                        </div>
                                                        <div class=""col-md-6 mb-2"">
                                                            <p><strong>Scan Email: </strong>{Appuser.Email}</p>
                                                        </div>
                                                    </div>

                                                    {Construct}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <script src=""https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js""></script>
                            </body>
                            </html>
                            ";

                    doc = new HtmlToPdfDocument()
                    {
                        GlobalSettings = {
                        ColorMode = DinkToPdf.ColorMode.Color,
                        Orientation = Orientation.Portrait,
                        PaperSize = DinkToPdf.PaperKind.A4,

                    },
                        Objects = {
                        new ObjectSettings()
                        {
                           PagesCount = true,
                           HtmlContent = body,
                           FooterSettings = { FontSize = 10, FontName= "Arial", Center = "Powered by Cancoly Tech", Line = true },

                        },
                    }
                    };

                });
              
                pdf = converter.Convert(doc);
                var stream = new MemoryStream();
                stream.Write(pdf);

                var contentType = @"application/pdf";
                var fileName = $"ScanReport_{DateTime.Now}.pdf";
                stream.Seek(0, SeekOrigin.Begin);

                return File(stream, contentType, fileName);

            }
            catch(Exception ex)
            { 
                Console.WriteLine(ex);
            }

            return Redirect($"/user-scan-report?id={Request.Form["id"]}");
        }

        public string AnalyzeSeverity(double percentage, string tumor)
        {
            string severity;

            if (tumor == "no tumor")
            {
                severity = "No tumor detected. There is no evidence of any abnormal growth at this stage. Maintain regular health check-ups to ensure continued well-being.";
            }
            else if (percentage <= 20.0)
            {
                severity = $"Low severity. The detected {tumor} appears to have minimal impact at this stage. Regular monitoring through periodic check-ups is recommended to ensure there are no significant changes over time.";
            }
            else if (percentage > 20.0 && percentage <= 40.0)
            {
                severity = $"Moderate severity. The {tumor} shows noticeable development. It is advised to undergo further diagnostic tests, such as imaging or biopsies, to determine the appropriate next steps and rule out potential complications.";
            }
            else if (percentage > 40.0 && percentage <= 60)
            {
                severity = $"Significant severity. The {tumor} has reached a stage where medical consultation with a specialist is crucial. A comprehensive evaluation is necessary to discuss treatment options and manage potential risks effectively.";
            }
            else if (percentage > 60 && percentage <= 80)
            {
                severity = $"High severity. The {tumor}'s progression suggests an advanced stage. Prompt evaluation of treatment options, such as surgery, chemotherapy, or radiation therapy, should be considered to address the condition proactively.";
            }
            else
            {
                severity = $"Critical severity. The {tumor} is in a critical stage and poses significant health risks. Immediate medical intervention is required to stabilize the condition and initiate aggressive treatment measures to mitigate further complications.";
            }


            return severity;
        }
    }
}
