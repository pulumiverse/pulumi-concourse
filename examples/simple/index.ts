import * as concourse from "@pulumiverse/concourse";

const random = new concourse.Random("my-random", { length: 24 });

export const output = random.result;