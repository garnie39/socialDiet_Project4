import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
<<<<<<< HEAD
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
=======
    // process.env.DATABASE_URI,"mongodb+srv://MisaGarnie:Gyx0YhfPLgcaUo99@cluster0.chw5mzk.mongodb.net/?retryWrites=true&w=majority"
    //"mongodb+srv://Mkuma:sl3X5GakLiGV53cY@cluster0.chw5mzk.mongodb.net/?retryWrites=true&w=majority"
  if(process.env.DATABASE_URI){
    await mongoose.connect(process.env.DATABASE_URI,{
      // await mongoose.connect("mongodb+srv://MisaGarnie:Gyx0YhfPLgcaUo99@cluster0.chw5mzk.mongodb.net/?retryWrites=true&w=majority", {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         dbName: 'socialDiet'||''
       });
       console.log("Connected to MongoDB");
  }
  
  } catch (err) {
    console.log("Error Connecting to Mongo Database:",err);
>>>>>>> daily_record_part
  }
};

export default connectToMongoDb;
<<<<<<< HEAD
=======






>>>>>>> daily_record_part
