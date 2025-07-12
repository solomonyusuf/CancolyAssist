using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class UploadFileService
    {
        public IHttpContextAccessor _httpContextAccessor;
        public UploadFileService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<List<List<string>>> UploadFile(List<IFormFile> files, string url = "")
        {
            var paths = new List<string>();
            var urls = new List<string>();

            foreach (var file in files)
            {
                var date = DateTime.Now.Date;
                var folderName = Path.Combine("wwwroot", "storage", $"{date.Day}-{date.Month}-{date.Year}");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                
                if(!Directory.Exists(pathToSave))
                {
                    Directory.CreateDirectory(pathToSave);
                }
                var fileName = $"{Guid.NewGuid().ToString("N")}_." + file.ContentType.Substring(6);
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                paths.Add(dbPath);
                urls.Add($"{url}/cdn.coly.storage/{folderName}/{fileName}");
            }

            return new List<List<string>> { paths, urls};
        }

  
        public List<string> SaveBase64AsImage(string base64String, string fileType)
        {
            try
            {
                // Extract fileString type if Base64 includes metadata like 'data:image/png;base64,...'
                var base64Data = base64String;
                var date = DateTime.Now.Date;

                if (base64String.Contains(","))
                {
                    var parts = base64String.Split(',');
                    base64Data = parts[1];
                    if (parts[0].Contains("image"))
                    {
                        var mimeType = parts[0].Split('/')[1].Split(';')[0];
                        fileType = mimeType;
                    }
                }

                // Decode Base64 string
                var imageBytes = Convert.FromBase64String(base64Data);

                // Save to a unique fileString path
                var folder = $"{date.Day}-{date.Month}-{date.Year}";
                var fileName = $"{Guid.NewGuid()}.{fileType}";
                var fullPath = Path.Combine("wwwroot", "storage", folder);
                
                if (!Directory.Exists(fullPath))
                {
                    Directory.CreateDirectory(fullPath);
                }
                var filePath = Path.Combine(fullPath, fileName);

                File.WriteAllBytes(filePath, imageBytes);


                var res = $"https://{_httpContextAccessor.HttpContext.Request.Host}/cdn.coly.storage/{folder}/{fileName}";

                return new List<string> { res, filePath };
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving image: {ex.Message}");
                return null; // Indicate failure
            }
        }


    }
}
