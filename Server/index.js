import express from 'express';
import mongoose from "mongoose";
import  connectToMongoDb  from "./db/database.js";
import registerRoute from "./routes/register.js"
import apiUsersRoute from "./routes/api/users.js"



const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true}));

connectToMongoDb();



app.use("/api/users", apiUsersRoute);
app.use("/register", registerRoute);


app.get("/", (req, res) => {
    res.json({ message: "hello why?" });
  });

//After mongoose client opens a successfull connection to the database, check if it returns "open", and if so, run the callback below which turns on the server.
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`server running on port%%%%% ${PORT}`));
  });
// app.listen(PORT, () => {
//   console.log('Listening on port', PORT)
// })

// connectToMongoDb().then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   });
