import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();

// app.use(cors());
// Replace the old app.use(cors()) with this:
app.use(cors()); // For now, this is fine to get it running, but eventually you should specify your Vercel URL here.
app.use(express.json());

// 1. THIS MUST BE BEFORE YOU ACCESS process.env
dotenv.config();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDB_URI; // 2. Double-check this name matches your .env file!

// 3. Connect to MongoDB (with a check to prevent that crash)
if (!URI) {
  console.error("ERROR: MongoDBURI is not defined in .env file!");
  process.exit(1); // Stop the server if the URI is missing
}

try {
  mongoose.connect(URI);
  console.log("Connected to mongodb");
} catch (error) {
  console.log("Error: ", error);
}

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});