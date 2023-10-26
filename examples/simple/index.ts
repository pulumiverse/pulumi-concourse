import * as concourse from "@tejavar/concourse";

const random = new concourse.Random("my-random", { length: 24 });

export const output = random.result;