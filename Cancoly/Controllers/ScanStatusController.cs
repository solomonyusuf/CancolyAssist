using Cancoly.Application.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cancoly.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScanStatusController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ScanStatusController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IActionResult GetStatus(Guid id)
        {
            var scan = _unitOfWork.BrainScanRepository.Get(id);

            if (scan == null)
                return NotFound();

            return Ok(new { status = scan.Status });
        }
    }

}
