import mongoose from "mongoose";

let isconnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("mongo db is connected");
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        dbName: "Share_prompt",
      });

      isconnected = true;
      console.log("Mongo Connected");
    } catch (error) {
      console.log(error);
    }
  }
};
