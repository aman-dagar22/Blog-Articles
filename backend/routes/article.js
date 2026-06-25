import express from "express";
import Articles from "../model/articlemodel.js";

const router = express.Router();

/*
=========================================
GET ALL ARTICLES
=========================================
*/

router.get("/", async (req, res) => {
  try {
    const articles = await Articles.find().sort({ createdAt: -1 });

    if (!articles.length) {
      return res.status(200).json({ message: "No Articles" });
    }

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching articles",
      error: error.message,
    });
  }
});

/*
=========================================
GET SINGLE ARTICLE
=========================================
*/

router.get("/:id", async (req, res) => {
  try {
    const article = await Articles.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        message: "Article not found",
      });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching article",
      error: error.message,
    });
  }
});

/*
=========================================
CREATE ARTICLE
=========================================
*/

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const {
      title,
      description,
      markdown,
      photo,
      author,
      category,
      tags,
      featured,
      status,
    } = req.body;

    if (
      !title ||
      !description ||
      !markdown ||
      !author
    ) {
      return res.status(400).json({
        message:
          "Title, Description, Markdown and Author are required.",
      });
    }

    const readingTime = Math.max(
      1,
      Math.ceil(markdown.split(/\s+/).length / 200)
    );

    const newArticle = new Articles({
      title,
      description,
      markdown,
      photo,
      author,
      category,
      tags,
      featured,
      status,
      readingTime,
    });

    await newArticle.save();

    res.status(201).json({
      message: "Article added successfully",
      article: newArticle,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error adding article",
      error: error.message,
    });
  }
});


/*
=========================================
DELETE ARTICLE
=========================================
*/

router.delete("/:id", async (req, res) => {
  try {
    const deletedArticle = await Articles.findByIdAndDelete(
      req.params.id
    );

    if (!deletedArticle) {
      return res.status(404).json({
        message: "Article not found",
      });
    }

    res.status(200).json({
      message: "Article deleted successfully",
      deletedArticle,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting article",
      error: error.message,
    });
  }
});

export default router;