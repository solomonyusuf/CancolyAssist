using Cancoly.Application;
using Cancoly.Application.Features;
using Cancoly.Domain.Resource;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CancolyAPI.Controllers
{
    [ApiController]
   
    public class FileUploadController : ControllerBase
    {
        public readonly UploadFileService _fileService;

        public FileUploadController(UploadFileService fileService)
        {
            _fileService = fileService;
        }

        [HttpPost]
        [Route($"v{GlobalVersion.version}" + "/api/multiple-fileString-uploads")]
        public async Task<List<UrlAndPathResource>> PostFiles([FromBody] List<FileResource> files)
        {
            var result = new List<UrlAndPathResource>();

            foreach (var file in files) 
            {
               var request = await Task.FromResult(_fileService.SaveBase64AsImage(file.fileString, file.fileType));

                result.Add(new UrlAndPathResource { Url = request[0], Path = request[1] });
            }

            return result;
        }
        
        [HttpPost]
        [Route($"v{GlobalVersion.version}" + "/api/single-fileString-upload")]
        public async Task<UrlResource> PostSingleFile([FromBody]FileResource file)
        {
            var request = await Task.FromResult(_fileService.SaveBase64AsImage(file.fileString, file.fileType));

            return new UrlResource { Url = request[0] };
        }
        
    }
}
