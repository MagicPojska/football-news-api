import express from "express";
import { getArticles, getArticlesByTitle } from "../controllers/articles.js";

const router = express.Router();

router.get("/", getArticles);
router.get("/:title", getArticlesByTitle);

export default router;
