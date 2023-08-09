import express from 'express';
import mongoose from "mongoose";
import  connectToMongoDb  from "./db/database.js";
import registerRoute from "./routes/register.js"
import loginRoute from "./routes/login.js"
import apiUsersRoute from "./routes/api/users.js"
import dotenv from 'dotenv'
dotenv.config()


// import { enableSession } from "./middleware/session.js";

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.json());
// app.use(enableSession);
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true}));

// connectToMongoDb();

app.use("/api/user", apiUsersRoute);
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);


app.get("/", (req, res) => {
    res.json({ message: "hello why?" });
  });

  connectToMongoDb().then(()=>{
//After mongoose client opens a successfull connection to the database, check if it returns "open", and if so, run the callback below which turns on the server.
mongoose.connection.once("open", (_) => {
    console.log("Connected to MongoDB");
  
  });

  })
  app.listen(PORT, () => console.log(`server running on port${PORT}`));
