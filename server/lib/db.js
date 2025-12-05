import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // make sure .env is loaded

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "chat-app", // this will create/use database "chat-app"
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
