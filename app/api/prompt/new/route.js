import { connectToDB } from "@utils/database.js";
import Prompt from "@models/prompt";
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (erorr) {
    console.log(erorr, "happen while creating a prompt");
  }
};
