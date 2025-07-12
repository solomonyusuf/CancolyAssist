using Cancoly.Domain.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Entities
{
    public class DICOMServer : BaseEntity
    {
        public string? ApplicationEntityTitle { get; set; }

        public string? CallingApplicationEntityTitle { get; set; }

        public string RemoteApplicationEntityTitle { get; set; }

        public string IPAddress { get; set; }

        public string Port { get; set; }

        public string TransferSyntax { get; set; }

    }
}
