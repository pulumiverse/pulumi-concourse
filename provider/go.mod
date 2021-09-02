module github.com/ringods/pulumi-concourse/provider

go 1.16

replace (
	github.com/hashicorp/go-getter v1.5.0 => github.com/hashicorp/go-getter v1.4.0
	github.com/hashicorp/terraform-plugin-sdk/v2 => github.com/pulumi/terraform-plugin-sdk/v2 v2.0.0-20210402103405-f5979773e8ba
)

require (
	github.com/alphagov/terraform-provider-concourse v0.0.0-20210326133208-3f95e2c58dd9
	github.com/hashicorp/terraform-plugin-sdk v1.9.1
	github.com/pulumi/pulumi-terraform-bridge/v3 v3.2.1
	github.com/pulumi/pulumi/sdk/v3 v3.4.0
)
