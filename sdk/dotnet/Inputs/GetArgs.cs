// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace Pulumiverse.Concourse.Inputs
{

    /// <summary>
    /// Get step
    /// </summary>
    public sealed class GetArgs : global::Pulumi.ResourceArgs
    {
        [Input("identifier", required: true)]
        public Input<string> Identifier { get; set; } = null!;

        public GetArgs()
        {
        }
        public static new GetArgs Empty => new GetArgs();
    }
}
