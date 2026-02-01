const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB(console.log("Connecting to MongoDB...")
);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const orderRoutes = require("./routes/orderRoutes");

app.use("/api/orders", orderRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.use("/api/admin", require("./routes/admin"));

app.use("/api/orders", require("./routes/orderRoutes"));

