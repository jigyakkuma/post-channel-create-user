import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { SendFunction } from "./functions/send.ts";

export const Workflow = DefineWorkflow({
  callback_id: "post-create-channel-user",
  title: "Post create channel user",
  input_parameters: {
    properties: {
      channelId: {
        type: Schema.slack.types.channel_id,
      },
      creatorId: {
        type: Schema.slack.types.user_id,
      },
    },
    required: ["channelId", "creatorId"],
  },
});

Workflow.addStep(SendFunction, {
  creatorId: Workflow.inputs.creatorId,
  channelId: Workflow.inputs.channelId,
});

export default Workflow;