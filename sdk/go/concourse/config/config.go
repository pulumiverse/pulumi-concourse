// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package config

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi/config"
)

// Password, do not use if using target
func GetPassword(ctx *pulumi.Context) string {
	return config.Get(ctx, "concourse:password")
}

// Target as in 'fly --target', do not use if using team/username/password
func GetTarget(ctx *pulumi.Context) string {
	return config.Get(ctx, "concourse:target")
}

// Team name, do not use if using target
func GetTeam(ctx *pulumi.Context) string {
	return config.Get(ctx, "concourse:team")
}

// URL, do not use if using target
func GetUrl(ctx *pulumi.Context) string {
	return config.Get(ctx, "concourse:url")
}

// Username, do not use if using target
func GetUsername(ctx *pulumi.Context) string {
	return config.Get(ctx, "concourse:username")
}
