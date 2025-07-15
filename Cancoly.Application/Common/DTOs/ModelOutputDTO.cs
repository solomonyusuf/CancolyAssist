using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Common.DTOs
{
    public class ModelOutputDTO
    {
        public uint Label { get; set; }

        public byte[] ImageSource { get; set; }

        public string PredictedLabel { get; set; }

        public float[] Score { get; set; }
    }

}
