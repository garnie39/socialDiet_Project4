import express from 'express';
import mongoose from "mongoose";
import  connectToMongoDb  from "./db/database.js";
import registerRoute from "./routes/register.js"
import loginRoute from "./routes/login.js"
import logoutRoute from "./routes/logout.js"
import apiUsersRoute from "./routes/api/users.js"
import apiSessionRouter from "./routes/api/session.js";
import userDailyRecord from "./routes/api/dailyRecord.js"
import dotenv from 'dotenv'
dotenv.config()
import expressSession from 'express-session'
import MongoStore from 'connect-mongo';
import apiSessionRouter from "./routes/api/session.js";

// import { enableSession } from "./middleware/session.js";

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.json());
// app.use(enableSession);
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true}));


app.use(
  expressSession({
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URI,
      dbName: "socialDiet",
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);
// connectToMongoDb();

app.use("/api/user", apiUsersRoute);
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);

app.use("/api/session", apiSessionRouter);
app.use("/api/dailyRecord", userDailyRecord);
app.use("/api/session", apiSessionRouter);





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
