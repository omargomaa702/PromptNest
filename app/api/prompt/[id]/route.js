import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;

    const posts = await Prompt.findById(id).populate("creator");

    if (posts) {
      return new Response(JSON.stringify(posts), { status: 200 });
    } else {
      return new Response("Prompts not found", { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};

// PATCH
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const { id } = await params;

    const existingPrompt = await Prompt.findById(id);

    if (existingPrompt) {
      existingPrompt.prompt = prompt;
      existingPrompt.tag = tag;

      await existingPrompt.save();

      return new Response(JSON.stringify(existingPrompt));
    } else {
      return new Response("Prompts not found", { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Failed to update the prompt", { status: 500 });
  }
};

// DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;

    await Prompt.findByIdAndDelete(id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to delete the prompt", { status: 500 });
  }
};
