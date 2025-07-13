using Cancoly.Application.IRepository;
using Cancoly.Application;
using Microsoft.Extensions.ML;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Cancoly.BrainTumorModel;

namespace Cancoly.MachineLearning
{
    public class BrainScanML
    {
        private readonly PredictionEnginePool<BrainTumorModel.ModelInput, BrainTumorModel.ModelOutput> _predictionEnginePool;

        public BrainScanML(
            PredictionEnginePool<BrainTumorModel.ModelInput, BrainTumorModel.ModelOutput> predictionEnginePool
            )
        {
            _predictionEnginePool = predictionEnginePool;
        }

        public async Task<List<ModelOutput>> UploadScans(List<string> scans)
        {
            var res = new List<ModelOutput>();

            foreach (var imagePath in scans)
            {
                var input = new BrainTumorModel.ModelInput
                {
                    ImageSource = System.IO.File.ReadAllBytes(imagePath)
                };

                var prediction = await Task.FromResult(_predictionEnginePool.Predict(input));
                
                res.Add(prediction);
            }

            return res;
        }
    }
}
