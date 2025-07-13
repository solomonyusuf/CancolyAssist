using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class UploadFileService
    {
        public async Task<List<string>> UploadFile(List<IFormFile> scans)
        {
            var res = new List<string>();

            foreach (var file in scans)
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

                res.Add(dbPath);
            }

            return res;
        }

        public string SaveBase64AsImage(string base64String, string fileType)
        {
            try
            {
                // Extract file type if Base64 includes metadata like 'data:image/png;base64,...'
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

                // Save to a unique file path
                var fileName = $"{Guid.NewGuid()}.{fileType}";
                var fullPath = Path.Combine("wwwroot", "storage", $"{date.Day}-{date.Month}-{date.Year}");
                
                if (!Directory.Exists(fullPath))
                {
                    Directory.CreateDirectory(fullPath);
                }
                var filePath = Path.Combine(fullPath, fileName);

                File.WriteAllBytes(filePath, imageBytes);

                return filePath; 
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving image: {ex.Message}");
                return null; // Indicate failure
            }
        }


    }
}
