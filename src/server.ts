import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import config from "./config";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

// Routes
app.get("/", (req, res) => {
  res.send({ success: true, message: "Server is running now ✅" });
});

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

async function Server() {
  try {
    await mongoose
      .connect(config.database_url!)
      .then(() => console.log("✅ Server Running"));
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
Server();
