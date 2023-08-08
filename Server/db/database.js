import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    if (process.env.DATABASE_URI) {
      await mongoose.connect(process.env.DATABASE_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        dbName: "socialDiet" || "",
      });
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    console.log("Error Connecting to Mongo Database:", err);
  }
};

export default connectToMongoDb;
