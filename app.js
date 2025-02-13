const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB Connection
const MONGO_URI = "mongodb+srv://lola:Oluwafunmilola200611@cluster0.1bv9e.mongodb.net/todo_db"; 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// Server Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
