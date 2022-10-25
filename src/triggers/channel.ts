import { Trigger } from "deno-slack-api/types.ts";
import { Workflow } from "../workflow.ts";
import env from "../../env.ts";

const trigger: Trigger<typeof Workflow.definition> = {
  type: "event",
  event: {
    event_type: "slack#/events/channel_created",
  },
  name: "Channel trigger",
  workflow: "#/workflows/post-create-channel-user",
  "inputs": {
    "channelId": {
      value: "{{data.channel_id}}",
    },
    "creatorId": {
      value: "{{data.creator_id}}",
    },
  },
};

export default trigger;