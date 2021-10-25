import axios from "axios";
import cheerio from "cheerio";

//Get news articles
export const getArticles = async (req, res) => {
  try {
    const articles = [];
    const response = await axios.get("https://www.theguardian.com/football");
    const $ = cheerio.load(response.data);

    $(".u-faux-block-link__overlay", response.data).map(function () {
      const title = $(this).text();
      const url = $(this).attr("href");
      articles.push({
        title,
        url,
      });
    });

    res.json(articles);
  } catch (error) {
    console.log(error);
  }
};

//Get news articles by title
export const getArticlesByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const articles = [];
    const response = await axios.get("https://www.theguardian.com/football");
    const $ = cheerio.load(response.data);

    $(
      `a:contains('${title[0].toUpperCase() + title.slice(1)}')`,
      response.data
    ).map(function () {
      const title = $(this).text();
      const url = $(this).attr("href");
      articles.push({
        title,
        url,
      });
    });

    res.json(articles);
  } catch (error) {
    console.log(error);
  }
};
