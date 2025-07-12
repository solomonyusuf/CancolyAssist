using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class LincenseKeyService
    {
        static string GenerateLicenseKey()
        {
            byte[] randomBytes = new byte[16]; // 128-bit key
            RandomNumberGenerator.Fill(randomBytes);

            StringBuilder keyBuilder = new StringBuilder();
            for (int i = 0; i < randomBytes.Length; i++)
            {
                keyBuilder.Append(randomBytes[i].ToString("X2"));
                if ((i + 1) % 4 == 0 && i != randomBytes.Length - 1)
                {
                    keyBuilder.Append("-");
                }
            }

            return keyBuilder.ToString();
        }
    }
}
