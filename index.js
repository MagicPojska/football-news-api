import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/", (req, res) => {
  res.send("Welcome to my footbal news API");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
