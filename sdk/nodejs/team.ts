// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Team extends pulumi.CustomResource {
    /**
     * Get an existing Team resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamState, opts?: pulumi.CustomResourceOptions): Team {
        return new Team(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'concourse:index/team:Team';

    /**
     * Returns true if the given object is an instance of Team.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Team {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Team.__pulumiType;
    }

    public readonly members!: pulumi.Output<string[] | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    public readonly pipelineOperators!: pulumi.Output<string[] | undefined>;
    public readonly teamName!: pulumi.Output<string>;
    public readonly viewers!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Team resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamArgs | TeamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamState | undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["pipelineOperators"] = state ? state.pipelineOperators : undefined;
            resourceInputs["teamName"] = state ? state.teamName : undefined;
            resourceInputs["viewers"] = state ? state.viewers : undefined;
        } else {
            const args = argsOrState as TeamArgs | undefined;
            if ((!args || args.owners === undefined) && !opts.urn) {
                throw new Error("Missing required property 'owners'");
            }
            if ((!args || args.teamName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamName'");
            }
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["pipelineOperators"] = args ? args.pipelineOperators : undefined;
            resourceInputs["teamName"] = args ? args.teamName : undefined;
            resourceInputs["viewers"] = args ? args.viewers : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Team.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Team resources.
 */
export interface TeamState {
    members?: pulumi.Input<pulumi.Input<string>[]>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    pipelineOperators?: pulumi.Input<pulumi.Input<string>[]>;
    teamName?: pulumi.Input<string>;
    viewers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Team resource.
 */
export interface TeamArgs {
    members?: pulumi.Input<pulumi.Input<string>[]>;
    owners: pulumi.Input<pulumi.Input<string>[]>;
    pipelineOperators?: pulumi.Input<pulumi.Input<string>[]>;
    teamName: pulumi.Input<string>;
    viewers?: pulumi.Input<pulumi.Input<string>[]>;
}