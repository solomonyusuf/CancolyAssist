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
        private readonly IHttpContextAccessor _contextAccessor;

        public UploadFileService(IHttpContextAccessor contextAccessor)
        {
            _contextAccessor = contextAccessor;
        }

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

        public async Task<List<string>> GetFileUrl(List<IFormFile> files)
        {
            var res = new List<string>();

            foreach (var file in files)
            {
                var date = DateTime.Now.Date;
                var folderName = Path.Combine("wwwroot", "storage", $"{date.Day}-{date.Month}-{date.Year}");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (!Directory.Exists(pathToSave))
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

                var url = $"{_contextAccessor.HttpContext.Request.Scheme}://{_contextAccessor.HttpContext.Request.Host}/storage/{date.Day}-{date.Month}-{date.Year}/{fileName}";

                res.Add(url);
            }

            return res;
        }

        public async Task<List<string>> SaveBase64AsImage(List<string> base64Images)
        {
            var savedFilePaths = new List<string>();
            var date = DateTime.Now.Date;
            var folderName = Path.Combine("wwwroot", "storage", $"{date.Day}-{date.Month}-{date.Year}");

            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            // Create the directory if it doesn't exist
            if (!Directory.Exists(uploadPath))
                Directory.CreateDirectory(uploadPath);

            int count = 0;

            foreach (var base64 in base64Images)
            {
                try
                {
                    // Clean base64 if it has data URI prefix
                    var cleanedBase64 = base64.Contains(",") ? base64.Split(',')[1] : base64;

                    var bytes = Convert.FromBase64String(cleanedBase64);

                    var fileName = $"{Guid.NewGuid().ToString()}.png";
                    var dbPath = Path.Combine(folderName, fileName);

                    await File.WriteAllBytesAsync(dbPath, bytes);
                    savedFilePaths.Add(dbPath);

                    count++;
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error saving image: {ex.Message}");
                }
            }

            return savedFilePaths;
        }


    }
}
