# Pulumi Concourse Provider 

A Pulumi provider for Concourse.

# Why
fly is an amazing tool, but configuring through scripts running fly is not ideal.

# Example Usage 
## Configure the provider (using target from fly)

 ```const concourse = require("@pulumi/concourse");

const providerConfig = new concourse.Provider("concourseProvider", {
  target: "target_name"
}); ```

## Configure the provider (using a local username and password)
Note: this is not basic authentication

 ```const providerConfig = new concourse.Provider("concourseProvider", {
  url: "https://wings.pivotal.io",
  team: "main",
  username: "localuser",
  password: "very-secure-password"
}); ```

## Look up all teams

```const teams = concourse.getTeams({});

export const teamNames = teams.names;
```

## Look up a team 
```const myTeam = concourse.getTeam({
  teamName: "main"
});

export const {
  teamName,
  owners,
  members,
  pipelineOperators,
  viewers
} = myTeam;```

## Look up a pipeline

```const myPipeline = concourse.getPipeline({
  teamName: "main",
  pipelineName: "pipeline"
});

export const {
  teamName,
  pipelineName,
  isExposed,
  isPaused,
  jsonConfig,
  yamlConfig
} = myPipeline;```

## Create a team

Supports `owners`, `members`, `pipelineOperators`, and `viewers`.

Specify users and groups by prefixing the strings:

`user`:
`group`:

```const myTeamResource = new concourse.Team("myTeam", {
  teamName: "my-team",
  owners: [
    "group:github:org-name",
    "group:github:org-name:team-name",
    "user:github:tlwr"
  ],
  viewers: [
    "user:github:samrees"
  ]
});```

## Create a pipeline

```const myPipelineResource = new concourse.Pipeline("myPipeline", {
  teamName: "main",
  pipelineName: "my-pipeline",
  isExposed: true,
  isPaused: true,
  pipelineConfig: "./pipeline-config.yml",
  pipelineConfigFormat: "yaml",
  vars: {
    foo: "bar"
  }
});```

## Import

Concourse teams can be imported using the team name:
```$ pulumi import concourse:team:Team myTeamResource my-team```

Concourse pipelines can be imported using the team name and pipeline name:
```$ pulumi import concourse:pipeline:Pipeline myPipelineResource my-team:my-app```






