#!/usr/bin/env node
import * as cdk from "@aws-cdk/core";
import { DwarfInvasionStack } from "../lib/infra-stack";

const app = new cdk.App();
new DwarfInvasionStack(app, "DwarfInvasionStack", {
    env: {
        region: "us-east-1",
        account: "028071413917",
    },
});
