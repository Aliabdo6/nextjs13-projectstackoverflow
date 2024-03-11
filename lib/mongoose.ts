import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URI) {
    return console.log(
      "MONGODB_URI is not defined"
    );
  }
  if (isConnected) {
    return console.log(
      " mongodb database connection"
    );
  }

  try {
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        dbName: "devflow",
      }
    );
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log(
      "Database connection error",
      error
    );
  }
};
