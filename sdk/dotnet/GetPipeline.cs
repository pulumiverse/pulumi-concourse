// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Concourse
{
    public static class GetPipeline
    {
        public static Task<GetPipelineResult> InvokeAsync(GetPipelineArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPipelineResult>("concourse:index/getPipeline:getPipeline", args ?? new GetPipelineArgs(), options.WithDefaults());

        public static Output<GetPipelineResult> Invoke(GetPipelineInvokeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<GetPipelineResult>("concourse:index/getPipeline:getPipeline", args ?? new GetPipelineInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetPipelineArgs : Pulumi.InvokeArgs
    {
        [Input("pipelineName", required: true)]
        public string PipelineName { get; set; } = null!;

        [Input("teamName", required: true)]
        public string TeamName { get; set; } = null!;

        public GetPipelineArgs()
        {
        }
    }

    public sealed class GetPipelineInvokeArgs : Pulumi.InvokeArgs
    {
        [Input("pipelineName", required: true)]
        public Input<string> PipelineName { get; set; } = null!;

        [Input("teamName", required: true)]
        public Input<string> TeamName { get; set; } = null!;

        public GetPipelineInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPipelineResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly bool IsExposed;
        public readonly bool IsPaused;
        public readonly string Json;
        public readonly string PipelineName;
        public readonly string TeamName;
        public readonly string Yaml;

        [OutputConstructor]
        private GetPipelineResult(
            string id,

            bool isExposed,

            bool isPaused,

            string json,

            string pipelineName,

            string teamName,

            string yaml)
        {
            Id = id;
            IsExposed = isExposed;
            IsPaused = isPaused;
            Json = json;
            PipelineName = pipelineName;
            TeamName = teamName;
            Yaml = yaml;
        }
    }
}