import { Manifest } from "deno-slack-sdk/mod.ts";
import { Workflow } from "./src/workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "post-channel-create-user",
  description: "A blank template for building Slack apps with Deno",
  icon: "assets/icon.png",
  functions: [],
  workflows: [Workflow],
  outgoingDomains: [],
  botScopes: [
    "channels:read",
    "chat:write",
    "chat:write.public"
  ],
});
