import mongoose from "mongoose";
// process.env.DATABASE_URI,
const connectToMongoDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://Mkuma:sl3X5GakLiGV53cY@cluster0.chw5mzk.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error Connecting to Mongo Database:",err);
  }
};

export default connectToMongoDb;




// import { MongoClient } from "mongodb";

// const mongoClient = new MongoClient(process.env.DATABASE_URI);

// let userCollection;
// let programCollection;
// let dailyCollection;
// let activityCollection;

// const connectToMongoDb = async () => {
//   try {
//     await mongoClient.connect();
//     const db = mongoClient.db("socialDiet");
//     userCollection = db.collection("user");
//     programCollection = db.collection("program");
//     dailyCollection = db.collection("dailyRecord");
//     activityCollection = db.collection("activity");
//   } catch (error) {
//     console.log("Error Connecting to Mongo Database:", error);
//   }
// };

// const getUserCollection = () => userCollection;
// const getProgramCollection = () => programCollection;
// const getDailyCollection = () => dailyCollection;
// const getActivityCollection = () => activityCollection;

// export {
//   connectToMongoDb,
//   getUserCollection,
//   getProgramCollection,
//   getDailyCollection,
//   getActivityCollection,
// };




