using Cancoly.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Domain.Resource
{
    public class ScanDetailResource : BaseResource
    {
        public Scan scan { get; set; }

        public List<ScanUpload> uploads { get; set; }
    }
}
