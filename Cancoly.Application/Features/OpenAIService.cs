using Cancoly.Application.Common.DTOs;
using Microsoft.Extensions.Configuration;
using OpenAI;
using OpenAI.Chat;
using System;
using System.ClientModel;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Cancoly.Application.Features
{
    public class OpenAIService
    {
        public IConfiguration _configuration;

        public OpenAIService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<ScanOutputDTO> GenerateOutput(string filePath)
        {
            try
            {
                var endpoint = _configuration.GetConnectionString("OpenAIUrl");
                var credential = _configuration.GetConnectionString("GITHUB_TOKEN");
                var model = _configuration.GetConnectionString("Model");
                string fileType = Path.GetExtension(filePath)?.TrimStart('.').ToLower();

                var openAIOptions = new OpenAIClientOptions()
                {
                    Endpoint = new Uri(endpoint)

                };

                var client = new ChatClient(model, new ApiKeyCredential(credential), openAIOptions);


                var requestOptions = new ChatCompletionOptions()
                {
                    Temperature = 1.0f,
                    TopP = 1.0f,
                    MaxOutputTokenCount = 1000
                };

                List<ChatMessage> userContent =
                 [
                     new UserChatMessage(
                        ChatMessageContentPart.CreateTextPart("You are a radiology assistant. Analyze the provided MRI brain slice thoroughly."),

                        ChatMessageContentPart.CreateTextPart(
                        @"Your response must strictly follow this JSON structure:
                        {
                          ""status"": ""tumor_present"" | ""no_tumor"",
                          ""confidence"": 70% write your estimated score in percentage,
                          ""tumor_type"": ""no_tumor"" | ""glioma"" | ""meningioma"" | ""pituitary"",
                          ""tumor_size"": ""Provide an estimated size (e.g., small, moderate, large)"",
                          ""tumor_stage"": ""e.g., early-stage, mid-stage, late-stage"",
                          ""tumor_location"": ""Specify precise region(s) (e.g., frontal lobe, pituitary gland)"",
                          ""description"": ""Give a detailed analysis of findings""
                        }"
                        ),

                        ChatMessageContentPart.CreateTextPart("Be aware that MRI images may be mirrored or reversed—always double-check for left-right symmetry before concluding."),

                        ChatMessageContentPart.CreateTextPart("In the 'description' field, include detailed observations such as:"),
                        ChatMessageContentPart.CreateTextPart("- Presence of edema or fluid accumulation"),
                        ChatMessageContentPart.CreateTextPart("- Any swelling, tissue deformation, or compression of nearby regions"),
                        ChatMessageContentPart.CreateTextPart("- Interactions with ventricles or midline shifts"),
                        ChatMessageContentPart.CreateTextPart("- Whether the tumor appears isolated or infiltrative"),

                        ChatMessageContentPart.CreateTextPart("Be precise, logical, and medically descriptive. Avoid vague terms."),

                        ChatMessageContentPart.CreateTextPart("Start your response with only the opening curly bracket `{`, do not include ```json or extra text."),

                        ChatMessageContentPart.CreateImagePart(
                            BinaryData.FromBytes(File.ReadAllBytes(Path.Combine(filePath))),
                            $"image/{fileType}",
                            ChatImageDetailLevel.Low
                        )
                    )
                 ];

                var response = await client.CompleteChatAsync(userContent, requestOptions);

                var jsonResult = response?.Value?.Content[0]?.Text;

                
                var result = JsonSerializer.Deserialize<ScanOutputDTO>(jsonResult, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                return result;
            }
            catch (Exception ex) 
            { 
                Console.WriteLine(ex);  
            }

            return default;
        }
    }
}
