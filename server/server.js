const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const connectDB = require("./config/db");
const authRoute = require("./routes/auth-route");

connectDB();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World! The Express server is running.");
});

app.use("/api/auth", authRoute);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
