import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";
import { SlackAPI } from "deno-slack-api/mod.ts";
import env from "../../env.ts";

export const SendFunction = DefineFunction({
  callback_id: "send",
  title: "Send",
  description: "Send message",
  source_file: "src/functions/send.ts",
  input_parameters: {
    properties: {
      creatorId: {
        type: Schema.slack.types.user_id,
      },
      channelId: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: [],
  },
});

export default SlackFunction(SendFunction, ({ inputs, token }) => {
  let message = `<@${inputs.creatorId}> Created channel: <#${inputs.channelId}>`;

  const client = SlackAPI(token, {});
  client.chat.postMessage({
    channel: `${env.CHANNEL_ID}`,
    text: message,
  });
  return {
    outputs: {},
  };
});