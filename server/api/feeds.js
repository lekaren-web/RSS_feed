const router = require("express").Router();
const { parse } = require("rss-to-json");

router.get("/", async (req, res, next) => {
  try {
    let FeedArr = []
    let backchannel = await parse("https://medium.com/feed/backchannel");
    let theEconomist  = await parse("https://medium.com/feed/the-economist");
    let npr = await parse("https://feeds.npr.org/1019/rss.xml")
    // let techCrunch = await parse ("https://techcrunch.com/startups/feed/");

    FeedArr = [backchannel,theEconomist, npr]
    res.send(JSON.stringify(FeedArr, null, 3))
  } catch (err) {
    next(err);
  }
});


module.exports = router;
