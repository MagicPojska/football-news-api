import express from "express";
import articleRoute from "./routes/articles.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my footbal news API");
});

app.use("/article", articleRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
