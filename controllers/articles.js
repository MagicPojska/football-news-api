import axios from "axios";
import cheerio from "cheerio";

const articles = [];
//Get news articles
export const getArticles = async (req, res) => {
  try {
    const response = await axios.get("https://www.theguardian.com/football");
    const $ = cheerio.load(response.data);

    $(".u-faux-block-link__overlay", response.data).each(function () {
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
