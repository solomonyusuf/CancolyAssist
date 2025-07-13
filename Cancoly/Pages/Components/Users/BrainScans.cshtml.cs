using Cancoly;
using Cancoly.Application.Common.DTOs;
using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Cancoly.MachineLearning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.ML;
using System;
using System.Linq;
using System.Net.Http.Headers;
using System.Text.Json;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Cancoly.Pages.Components.Users
{
    [Authorize]
    public class BrainScansModel : PageModel
    {
        private IUnitOfWork _unitOfWork;
        private UploadFileService _fileService;
        private UserManager<ApplicationUser> _userManager;
        private HttpClient _httpClient;
        private BrainScanML _brainScanService;

        public BrainScansModel(
            UploadFileService fileService,
             IUnitOfWork unitOfWork,
             UserManager<ApplicationUser> userManager,
             HttpClient httpClient,
             BrainScanML brainScanService
            )
        {
            _fileService = fileService;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _httpClient = httpClient;
            _brainScanService = brainScanService;
        }

        public Guid Id { get; set; }

        public List<BrainScan> brainScans { get; set; }
        
        public async Task OnGetAsync([FromQuery] string Search)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(User.Identity.Name);

                brainScans = await _unitOfWork.BrainScanRepository.Query()
                                              .Where(x=> x.UserId == user.Id)
                                              .ToListAsync();
                if(Search != null)
                {
                    brainScans = brainScans.Where(x
                        => x.Title.Contains(Search) ||
                           x.Label.Contains(Search)).ToList();
                                            
                }
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
                var user = await _userManager.FindByEmailAsync(User.Identity.Name);

                if (Request.Form["type"] == "delete")
                {
                    await Task.Run(async () =>
                    {
                        var model = await _unitOfWork.BrainScanRepository.Get(Guid.Parse(Request.Form["id"]));

                        _unitOfWork.BrainScanRepository.Delete(model);
                        await _unitOfWork.Save();

                        foreach (var item in model.FilePaths.Split(','))
                        {
                            System.IO.File.Delete(item);
                        }

                        TempData["AlertSubject"] = "Deletion Successful";
                        TempData["AlertMessage"] = "Scan Removed Successfully!";
                        TempData["AlertType"] = "success";
                    });    
                }
                else
                {
                    //if (User.IsInRole("User") && Request.Form.Files.Count > 5 ||
                    //    User.IsInRole("Professional") && Request.Form.Files.Count > 50 ||
                    //    User.IsInRole("Professional") && Request.Form.Files.Count > 100
                    //    )
                    //{
                    //    TempData["AlertSubject"] = "Limit Exceeded";
                    //    TempData["AlertMessage"] = "File Upload Limit Exceeded!";
                    //    TempData["AlertType"] = "error";
                    //    return Redirect("/user-brain-scans");
                    //}

                    //var query = await _unitOfWork.BrainScanRepository.Query()
                    //                             .Where(x => x.DateCreated.Month == DateTimeOffset.Now.Month && x.UserId == user.Id)
                    //                             .CountAsync();

                    //if (User.IsInRole("User") && query >= 100 || User.IsInRole("Professional") && query >= 100000)
                    //{
                    //    TempData["AlertSubject"] = "Quota Exceeded";
                    //    TempData["AlertMessage"] = "Monthly Quota Limit Exceeded!";
                    //    TempData["AlertType"] = "warning";

                    //    return Redirect("/user-brain-scans");
                    //}
                   
                    await Task.Run(async () =>
                    {
                        var user = await _userManager.FindByEmailAsync(User.Identity.Name);

                        var files = await _fileService.UploadFile(Request.Form.Files.ToList());

                        var scan = new BrainScan();

                        scan.Title = Request.Form["title"];
                        scan.Email = Request.Form["email"];
                        scan.UserId = user.Id;
                        //scan.FilePaths = string.Join(',', file);
                        //scan.Score = string.Join(',', scores);
                        //scan.Label = string.Join(',', labels);
                        scan.Report = "";


                        var response = _unitOfWork.BrainScanRepository.Create(scan);
                        await _unitOfWork.Save();

                        Id = response.Id;
                        var date = DateTime.UtcNow.Date;
                        var folder = $"{date:dd-MM-yyyy}";

                        foreach (var item in files)
                        {
                            var fileName = Path.GetFileName(item);
                            var url = $"{Request.Scheme}://{Request.Host}/coly.cdn.storage/{folder}/{fileName}";

                            var scanUpload = new ScanUpload
                            {
                                ImageUrl = url,
                                FilePath = item
                            };

                            _unitOfWork.ScanUploadRepository.Create(scanUpload);
                        }

                        // Save once after all inserts (better performance)
                        await _unitOfWork.Save();

                        TempData["AlertSubject"] = "Creation Successful";
                        TempData["AlertMessage"] = "Scan Created Successfully!";
                        TempData["AlertType"] = "success";

                    });
                }
               
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);  
            }

            return Redirect($"/user-scan-report?id={Id}");
        }


    }
}
