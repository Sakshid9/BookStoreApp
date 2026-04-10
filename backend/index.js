import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();

// 1. Initialize environment variables FIRST
dotenv.config();

// 2. Configure CORS (Must be before routes)
// This allows your specific Vercel subdomain to talk to this Render backend
app.use(cors({
  origin: ["https://bookstore.dubeysakshi.in", "https://book-store-app-eight-umber.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// 3. Middleware for JSON
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDB_URI;

// 4. Connect to MongoDB
if (!URI) {
  console.error("ERROR: MongoDB_URI is not defined in .env file!");
  process.exit(1);
}

mongoose.connect(URI)
  .then(() => console.log("Connected to mongodb"))
  .catch((error) => console.log("MongoDB Connection Error: ", error));

// 5. Defining Routes (Middleware must be above these!)
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});