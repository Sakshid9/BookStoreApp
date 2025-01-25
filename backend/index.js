// const express = require('express');
// const dotenv = require("dotenv")

//ab hum import wala syntax use kr skte hai bcz type module kar diye hai in package.json 


import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

//Middle ware
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI = process.env.MongoDBURI

//Connect To MongoDb
// try{
//     mongoose.connect(URI,{
//       useNewUrlParser:true,
//       useUnifiedTopology:true
//     });
//     console.log("Connectedd to Mongodb");
    
// }catch(error){
//       console.log("Error: ", error);
      
// }




// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);

// app.get('/', (req, res) => {
//   res.send('Hello World! Bookstore App!!SS')
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})