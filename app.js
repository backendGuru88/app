require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing from .env file");
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// Server Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
