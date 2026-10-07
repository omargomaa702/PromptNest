import { connectToDB } from "@utils/database";
import Prompt from "../../../../../models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { id } = await params;

    const posts = await Prompt.find({
      creator: id,
    }).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};
