using Dicom;
using Dicom.Imaging;
using Microsoft.AspNetCore.Http;
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;

namespace Cancoly.Application.Features
{
    public class DICOMService
    {
        public List<string> ConvertDicomToBase64(IFormFileCollection files)
        {
            var base64Images = new List<string>();

            foreach (var file in files)
            {
                if (file != null && file.Length > 0)
                {
                    try
                    {
                        using (var stream = file.OpenReadStream())
                        {
                            var dicomFile = DicomFile.Open(stream);
                            var dicomImage = new DicomImage(dicomFile.Dataset);
                            int totalFrames = dicomImage.NumberOfFrames;
                            int maxFrames = Math.Min(totalFrames, 10); // Cap at 10

                            for (int i = 0; i < maxFrames; i++)
                            {
                                using (var bitmap = dicomImage.RenderImage(i).As<Bitmap>())
                                using (var ms = new MemoryStream())
                                {
                                    bitmap.Save(ms, ImageFormat.Png);
                                    string base64 = Convert.ToBase64String(ms.ToArray());
                                    base64Images.Add(base64);
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Failed to process file {file.FileName}: {ex.Message}");
                    }
                }
            }

            return base64Images;
        }

    }
}
