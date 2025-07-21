using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using DinkToPdf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using PayStack.Net;
using System.Security.Policy;

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
                complete = uploads.Where(x => x.Pending == false).Count();
                pending = uploads.Where(x => x.Pending == true).Count();
            

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
                if (Request.Form["type"] == "delete")
                {
                    try 
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

                        });
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex);
                    }

                    TempData["AlertSubject"] = "Deletion Successful";
                    TempData["AlertMessage"] = "Scan Removed Successfully!";
                    TempData["AlertType"] = "success";

                    return Redirect("/user-brain-scans");

                }
                else if(Request.Form["type"] == "update")
                {

                    var model = await _unitOfWork.ScanUploadRepository.Get(Guid.Parse(Request.Form["id"]));
                    model.Report = Request.Form["message"];

                    _unitOfWork.ScanUploadRepository.Update(model);
                    await _unitOfWork.Save();

                    TempData["AlertSubject"] = "Update Successful";
                    TempData["AlertMessage"] = "Scan Updated Successfully!";
                    TempData["AlertType"] = "success";

                    return Redirect($"/user-scan-report?id={model.BrainScanId}");
                }
                else
                {
                    var id = Request.Form["id"];
                    Scan = await _unitOfWork.BrainScanRepository.Get(Guid.Parse(id));
                    var uploads = await _unitOfWork.ScanUploadRepository.Query()
                                                    .Where(x=> x.BrainScanId == Scan.Id)
                                                    .ToListAsync();

                    Appuser = await _userManager.FindByNameAsync(User.Identity.Name);
                    string Construct = null;

                    var converter = new BasicConverter(new PdfTools());
                    var doc = new HtmlToPdfDocument();

                    byte[] pdf;
                    var provider = new FileExtensionContentTypeProvider();
                    await Task.Run(async () =>
                    {
                        foreach(var item in uploads)
                        {
                            var imagePath = Path.Combine(Directory.GetCurrentDirectory(),  item.FilePath); 

                            if (!System.IO.File.Exists(imagePath))
                                continue;

                            // Get MIME type based on file extension
                            string contentType;
                            if (!provider.TryGetContentType(imagePath, out contentType))
                            {
                                contentType = "application/octet-stream"; // fallback
                            }

                            var base64Image = Convert.ToBase64String(System.IO.File.ReadAllBytes(imagePath));
                            var imageSrc = $"data:{contentType};base64,{base64Image}";

                            Construct += $@"
                                        <div class=""scan-item"">
                                            <div class=""scan-image"">
                                                <img src=""{imageSrc}"" style=""height:400px;"" alt=""Brain MRI Scan"">
                                            </div>
                                            <div class=""scan-details"">
                                                <div class=""diagnosis-score"">{item.Confidence}% Confidence</div>
                                                <div class=""diagnosis-label"">{item.Label}</div>
                                                <div class=""diagnosis-label"">Located at {item.Location}</div>
                                                <div class=""severity-indicator severity-high"">{item.Stage}</div>
                                                <div class=""confidence-bar"">
                                                    <div class=""confidence-fill"" style=""width: {item.Confidence}%;""></div>
                                                </div>
                                            </div>
                                        </div>

                                    <div class=""summary"">
                                        <h3>Clinical Summary</h3>
                                        <p>{item.Report}</p>
                                    </div>
                            ";

                        }

                        string logoUrl = Appuser.CompanyLogo ?? $"{Request.Scheme}://{Request.Host}/logo.png";

                        // Download image bytes from the URL
                        using var httpClient = new HttpClient();
                        var imageBytes = await httpClient.GetByteArrayAsync(logoUrl);

                        // Get MIME type from extension
                        string contentType1;
                        var logoExtension = Path.GetExtension(logoUrl);
                        if (!provider.TryGetContentType(logoExtension, out contentType1))
                        {
                            contentType1 = "application/octet-stream";
                        }

                        // Convert to base64
                        var base64Logo = Convert.ToBase64String(imageBytes);
                        var base64LogoSrc = $"data:{contentType1};base64,{base64Logo}";

                        var body = $@"

                            <!DOCTYPE html>
                            <html lang=""en"">
                            <head>
                                <meta charset=""UTF-8"">
                                <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                                <title>Brain Tumor Diagnosis Report</title>
                                <style>
                                    * {{
                                        margin: 0;
                                        padding: 0;
                                        box-sizing: border-box;
                                    }}

                                    body {{
                                        font-family: 'Arial', sans-serif;
                                        line-height: 1.6;
                                        color: #333;
                                        background: #fff;
                                        font-size: 12px;
                                    }}

                                    .container {{
                                        max-width: 210mm;
                                        margin: 0 auto;
                                        padding: 20px;
                                        background: white;
                                    }}

                                    /* Header Section */
                                    .header {{
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        border-bottom: 3px solid #2c5aa0;
                                        padding-bottom: 15px;
                                        margin-bottom: 25px;
                                    }}

                                    .logo-section {{
                                        display: flex;
                                        align-items: center;
                                        gap: 15px;
                                    }}

                                    .logo-placeholder {{
                                         width: 60px;
                                        height: 60px;
                                        background-size: cover;
                                        background-position: center;
                                        border: 2px dashed #ccc;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 10px;
                                        color: #666;
                                    }}

                                    .hospital-info h1 {{
                                        font-size: 18px;
                                        color: #2c5aa0;
                                        font-weight: bold;
                                        margin-bottom: 2px;
                                    }}

                                    .hospital-info p {{
                                        font-size: 10px;
                                        color: #666;
                                        margin: 1px 0;
                                    }}

                                    .report-meta {{
                                        text-align: right;
                                        font-size: 10px;
                                        color: #666;
                                    }}

                                    .report-meta strong {{
                                        color: #333;
                                    }}

                                    /* Report Title */
                                    .report-title {{
                                        background: linear-gradient(135deg, #2c5aa0, #3d6bb3);
                                        color: white;
                                        padding: 15px 20px;
                                        margin-bottom: 25px;
                                        border-radius: 5px;
                                    }}

                                    .report-title h2 {{
                                        font-size: 16px;
                                        font-weight: bold;
                                        margin-bottom: 5px;
                                    }}

                                    .report-title p {{
                                        font-size: 11px;
                                        opacity: 0.9;
                                    }}

                                    /* Patient Information */
                                    .patient-info {{
                                        background: #f8f9fa;
                                        border: 1px solid #dee2e6;
                                        border-radius: 5px;
                                        padding: 15px;
                                        margin-bottom: 25px;
                                    }}

                                    .patient-info h3 {{
                                        color: #2c5aa0;
                                        font-size: 14px;
                                        margin-bottom: 10px;
                                        border-bottom: 1px solid #dee2e6;
                                        padding-bottom: 5px;
                                    }}

                                    .patient-details {{
                                        display: grid;
                                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                                        gap: 10px;
                                    }}

                                    .patient-details div {{
                                        display: flex;
                                        align-items: center;
                                    }}

                                    .patient-details strong {{
                                        min-width: 80px;
                                        color: #495057;
                                        font-size: 11px;
                                    }}

                                    .patient-details span {{
                                        color: #333;
                                        font-size: 11px;
                                    }}

                                    /* Scan Results */
                                    .scan-results {{
                                        margin-bottom: 25px;
                                    }}

                                    .scan-results h3 {{
                                        color: #2c5aa0;
                                        font-size: 14px;
                                        margin-bottom: 15px;
                                        border-bottom: 2px solid #2c5aa0;
                                        padding-bottom: 5px;
                                    }}

                                    .scan-item {{
                                        display: flex;
                                        align-items: center;
                                        background: #fff;
                                        border: 1px solid #dee2e6;
                                        border-radius: 5px;
                                        padding: 15px;
                                        margin-bottom: 15px;
                                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                                    }}

                                    .scan-image {{
                                        flex: 0 0 120px;
                                        margin-right: 20px;
                                    }}

                                    .scan-image img {{
                                        width: 100%;
                                        height: 120px;
                                        object-fit: cover;
                                        border-radius: 5px;
                                        border: 1px solid #dee2e6;
                                    }}

                                    .scan-details {{
                                        flex: 1;
                                    }}

                                    .diagnosis-score {{
                                        font-size: 16px;
                                        font-weight: bold;
                                        margin-bottom: 8px;
                                    }}

                                    .diagnosis-label {{
                                        font-size: 12px;
                                        color: #495057;
                                        margin-bottom: 8px;
                                    }}

                                    .severity-indicator {{
                                        display: inline-block;
                                        padding: 4px 8px;
                                        border-radius: 3px;
                                        font-size: 10px;
                                        font-weight: bold;
                                        text-transform: uppercase;
                                    }}

                                    .severity-low {{
                                        background: #d4edda;
                                        color: #155724;
                                        border: 1px solid #c3e6cb;
                                    }}

                                    .severity-moderate {{
                                        background: #fff3cd;
                                        color: #856404;
                                        border: 1px solid #ffeaa7;
                                    }}

                                    .severity-high {{
                                        background: #f8d7da;
                                        color: #721c24;
                                        border: 1px solid #f5c6cb;
                                    }}

                                    .severity-critical {{
                                        background: #d1ecf1;
                                        color: #0c5460;
                                        border: 1px solid #bee5eb;
                                    }}

                                    /* Progress Bar */
                                    .confidence-bar {{
                                        width: 100%;
                                        height: 8px;
                                        background: #e9ecef;
                                        border-radius: 4px;
                                        overflow: hidden;
                                        margin-top: 8px;
                                    }}

                                    .confidence-fill {{
                                        height: 100%;
                                        background: linear-gradient(90deg, #28a745, #ffc107, #dc3545);
                                        transition: width 0.3s ease;
                                    }}

                                    /* Summary Section */
                                    .summary {{
                                        background: #f8f9fa;
                                        border-left: 4px solid #2c5aa0;
                                        padding: 15px;
                                        margin-bottom: 25px;
                                    }}

                                    .summary h3 {{
                                        color: #2c5aa0;
                                        font-size: 14px;
                                        margin-bottom: 10px;
                                    }}

                                    .summary p {{
                                        font-size: 11px;
                                        color: #495057;
                                        margin-bottom: 8px;
                                    }}

                                    /* Footer */
                                    .footer {{
                                        border-top: 1px solid #dee2e6;
                                        padding-top: 15px;
                                        margin-top: 30px;
                                        font-size: 10px;
                                        color: #6c757d;
                                    }}

                                    .footer-content {{
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                    }}

                                    .disclaimer {{
                                        max-width: 60%;
                                        font-style: italic;
                                    }}

                                    .generated-info {{
                                        text-align: right;
                                    }}

                                    /* Print Styles */
                                    @media print {{
                                        body {{
                                            font-size: 11px;
                                        }}
            
                                        .container {{
                                            padding: 10px;
                                        }}
            
                                        .scan-item {{
                                            page-break-inside: avoid;
                                        }}
                                    }}
                                </style>
                            </head>
                            <body>
                                <div class=""container"">
                                    <!-- Header -->
                                    <div class=""header"">
                                        <div class=""logo-section"">
                                            <div 
                                                    style=""background-image: url('{base64LogoSrc}'); background-repeat: no-repeat; height: 100px;""
                                                    class=""logo-placeholder"" ></div>
                                            <div class=""hospital-info"">
                                                <h1>{Appuser.CompanyName}</h1>
                                                <p>Radiology Unit</p>
                                                <p>Phone:{Appuser.PhoneNumber} | Email: {Appuser.Email}</p>
                                            </div>
                                        </div>
                                        <div class=""report-meta"">
                                            <p><strong>Report ID:</strong>{string.Join("", Scan.Id.ToString().Take(8))}</p>
                                            <p><strong>Generated:</strong> {DateTime.Now.ToLongDateString()}</p>
                                            <p><strong>Status:</strong> Final</p>
                                        </div>
                                    </div>

                                    <!-- Report Title -->
                                    <div class=""report-title"">
                                        <h2>Brain Tumor Analysis Report</h2>
                                        <p>AI-Assisted Diagnostic Imaging Analysis</p>
                                    </div>

                                    <!-- Patient Information -->
                                    <div class=""patient-info"">
                                        <h3>Patient Information</h3>
                                        <div class=""patient-details"">
                                            <div><strong>Name:</strong> <span>{Scan.Title}</span></div>
                                            <div><strong>Generated:</strong> <span>{DateTime.Now}</span></div>
                                            <div><strong>Phone No:</strong> <span>{Appuser.PhoneNumber}</span></div>
                                             <div><strong>Scan Date:</strong> <span>{Scan.DateCreated}</span></div>
                                         </div>
                                    </div>

                                    <!-- Scan Results -->
                                    <div class=""scan-results"">
                                        <h3>Diagnostic Results</h3>
            
                                        <!-- Sample Scan Result 1 -->
                                       {Construct}


                                    <!-- Footer -->
                                    <div class=""footer"">
                                        <div class=""footer-content"">
                                            <div class=""disclaimer"">
                                                <strong>Disclaimer:</strong> This AI-assisted analysis is for clinical decision support only. 
                                                Final diagnosis must be confirmed by qualified medical professionals through comprehensive evaluation.
                                            </div>
                                            <div class=""generated-info"">
                                                <p>Generated by: CancolyAI v1.0</p>
                                                <p>Radiologist: {Appuser.FirstName + " "+ Appuser.LastName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </body>
                            </html>";

                        doc = new HtmlToPdfDocument()
                        {
                            GlobalSettings = 
                            {
                                    ColorMode = DinkToPdf.ColorMode.Color,
                                    Orientation = Orientation.Portrait,
                                    PaperSize = DinkToPdf.PaperKind.A4,
                            },
                            
                            Objects =
                            {
                                    new ObjectSettings()
                                    {
                                       PagesCount = true,
                                       HtmlContent = body,
                                       FooterSettings = { FontSize = 10, FontName= "Arial", Center = "Powered by Cancoly Tech", Line = true },
                                       WebSettings = {
                                            DefaultEncoding = "utf-8",
                                            LoadImages = true,
                                        },
                                       LoadSettings = new LoadSettings
                                        {
                                            BlockLocalFileAccess = false,
                                        }
                                    },
                            },
                            
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

               

            }
            catch(Exception ex)
            { 
                Console.WriteLine(ex);
            }

            return Redirect("/user-brain-scans");
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
