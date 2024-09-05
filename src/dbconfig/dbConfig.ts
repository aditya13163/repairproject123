import mongoose from "mongoose";

const dbConnect = async () => {
  // Check if there's an existing connection
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure if connection error occurs
  }
};

export default dbConnect;
