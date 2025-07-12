using Cancoly.Application.Features;
using Cancoly.Application;
using Cancoly.Domain.Entities;
using Cancoly.Domain.Resource;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CancolyAPI.Controllers
{
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private ClientsService _mainService;

        public ClientsController(ClientsService mainService)
        {
            _mainService = mainService;
        }

        [Route($"v{GlobalVersion.version}/" + "api/get-clients/{organizationId}")]
        [HttpGet]
        public async Task<List<Client>> GetAll(
            [FromRoute] Guid organizationId,
            [FromQuery] string userId = "",
            [FromQuery] string filter = ""
            )
        {
            var query = await _mainService.GetAll(organizationId, userId, filter).ToListAsync();

            return query;
        }
        
        [Route($"v{GlobalVersion.version}/" + "api/client/{Id}")]
        [HttpGet]
        public async Task<Client> GetClient(
            [FromRoute] Guid Id
            )
        {
            var query = await _mainService.Get(Id);

            return query;
        }

        [Route($"v{GlobalVersion.version}/" + "api/create-client")]
        [HttpPost]
        public IActionResult Create([FromBody] ClientResource entityModel)
        {
            var entity = new Client
            {
                Image = entityModel.Image,
                FirstName = entityModel.FirstName,
                LastName = entityModel.LastName,
                Email = entityModel.Email,
                PhoneNo = entityModel.PhoneNo,
                BirthDate = entityModel.BirthDate,
                Sex = entityModel.Sex,
                UserId = entityModel.UserId,
                OrganizationId = Guid.Parse(entityModel.OrganizationId),
                ResidentialAddress = entityModel.ResidentialAddress,
                
            };

            var result = _mainService.Create(entity);

            return Ok(result);
        }

        [Route($"v{GlobalVersion.version}/" + "api/update-client/{Id}")]
        [HttpPut]
        public async Task<IActionResult> Update([FromRoute] Guid Id, [FromBody] ClientResource entityModel)
        {
            var query = await _mainService.Get(Id);

            if (query == null)
                return BadRequest("Scan not found");

            query.Image = entityModel.Image;
            query.FirstName = entityModel.FirstName;
            query.LastName = entityModel.LastName;
            query.Email = entityModel.Email;
            query.PhoneNo = entityModel.PhoneNo;
            query.BirthDate = entityModel.BirthDate;
            query.Sex = entityModel.Sex;
            query.UserId = entityModel.UserId;
            query.OrganizationId = Guid.Parse(entityModel.OrganizationId);
            query.ResidentialAddress = entityModel.ResidentialAddress;

            var result = _mainService.Update(query);

            return Ok(result);
        }

        [Route($"v{GlobalVersion.version}/" + "api/delete-client/{Id}")]
        [HttpDelete]
        public async Task<IActionResult> Delete([FromRoute] Guid Id)
        {
            var query = await _mainService.Get(Id);

            if (query == null)
                return BadRequest("Client not found");

            _mainService.Delete(query);

            return Ok("Deleted successfully");
        }
    }
}
