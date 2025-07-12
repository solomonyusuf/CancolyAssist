using Cancoly.Application;
using Cancoly.Application.Features;
using Cancoly.Application.IRepository;
using Cancoly.Domain.Entities;
using Cancoly.Domain.Resource;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CancolyAPI.Controllers
{
    
    [ApiController]
    public class ScansController : ControllerBase
    {
        private ScanService _scanService;
        private ScanuploadService _scanuploadService;
        private IUnitOfWork _unitOfWork;

        public ScansController(
            ScanService scanService,
            ScanuploadService scanuploadService,
            IUnitOfWork unitOfWork)
        {
            _scanService = scanService;
            _scanuploadService = scanuploadService;
            _unitOfWork = unitOfWork;
        }

        [Route($"v{GlobalVersion.version}/" + "api/get-scans/{organizationId}")]
        [HttpGet]
        public async Task<IActionResult> GetAll(
            [FromRoute]Guid organizationId,
            [FromQuery] string userId = "",
            [FromQuery] int pageNumber = 1,
            [FromQuery] int pageSize = 10,
            [FromQuery] string filter = ""
            )
        {
            var query = await _scanService.GetAll(organizationId, userId, pageNumber, pageSize, filter).ToListAsync();

            return Ok(query);
        }
        
        [Route($"v{GlobalVersion.version}/" + "api/scan/{Id}")]
        [HttpGet]
        public async Task<ScanDetailResource> Get(
            [FromRoute]Guid Id)
        {
            var query = await _scanService.Get(Id);

            var uploads = await _unitOfWork.ScanUploadRepository.Query()
                                   .Where(x=> x.BrainScanId == query.Id).ToListAsync(); 

            return (new ScanDetailResource { scan = query, uploads = uploads});
        }

        [Route($"v{GlobalVersion.version}/" + "api/create-scan")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]ScanResource scan)
        {
            var entity = new Scan
            {
                Image = scan.Image,
                Title = scan.Title,
                ClientId = Guid.Parse(scan.ClientId),
                OrganizationId = Guid.Parse(scan.OrganizationId), 
                UserId = scan.UserId,
            };

            var result = _scanService.Create(entity);

            var uploads = new List<ScanUpload>();

            foreach (var item in scan.uploads) 
            {
                uploads.Add(
                        new ScanUpload
                        {
                            OrganizationId = result.OrganizationId,
                            UserId = result.UserId,
                            BrainScanId = result.Id,
                            ImageUrl = item.ImageUrl,
                            FilePath = item.FilePath
                        });
            }

            _scanuploadService.BulkCreate(uploads);

            return Ok(result);
        }
        
        [Route($"v{GlobalVersion.version}/" + "api/update-scan/{Id}")]
        [HttpPut]
        public async Task<IActionResult> Update([FromRoute]Guid Id,[FromBody]ScanResource scan)
        {
            var query = await _scanService.Get(Id);

            if (query == null)
                return BadRequest("Scan not found");


            query.Image = scan.Image;
            query.Title = scan.Title;
            query.ClientId = Guid.Parse(scan.ClientId);
            query.OrganizationId = Guid.Parse(scan.OrganizationId);
            query.UserId = scan.UserId;
            
            var result = _scanService.Update(query);

            return Ok(result);
        }

        [Route($"v{GlobalVersion.version}/" + "api/delete-scan/{Id}")]
        [HttpDelete]
        public async Task<IActionResult> Delete([FromRoute]Guid Id)
        {
            var query = await _scanService.Get(Id);

            if (query == null)
                return BadRequest("Scan not found");

             _scanService.Delete(query);

            return Ok("Deleted successfully");
        }
    }
}
