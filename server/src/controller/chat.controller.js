import { OpenRouter } from "@openrouter/sdk";

export const chat = async (req, res) => {
  try {
    const client = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const { messages } = req.body;

    const completion = await client.chat.send({
      chatRequest: {
        model: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        messages,
      },
    });

    res.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
};
