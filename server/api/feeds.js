const router = require("express").Router();
// const { feeds } = require("../db");
const { parse } = require("rss-to-json");

router.get("/", async (req, res, next) => {
  try {
    // const feedss = await feeds.findAll()
    // res.json(feeds)
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

// router.get('/:id', async (req, res, next) => {
//     try {
//         const project = await Project.findByPk(req.params.id, {include: Robot})
//        if (project) res.json(project)
//        else res.sendStatus(404)
//     } catch (err) {
//         next(err)
//     }
// });

// router.post('/create', async(req, res, next) => {
//     try {
//         res.status(201).json(await Project.create(req.body))
//     } catch (error) {
//         next(error)
//     }
// });

// router.put('/edit/:id', async(req, res, next) => {
//     try {
//         const project = await Project.findByPk(req.params.id) ;
//             res.json(await project.update(req.body))
//     } catch (error) {
//             next(error)
//     }
// });

// router.delete('/:id', async(req, res, next) => {
//     try {
//         const project = await Project.findByPk(req.params.id)
//         if (project) {
//             await project.destroy()
//             res.sendStatus(204)
//         } else {
//             res.sendStatus(404)
//         }
//     } catch (error) {
//        next(error)
//     }
// });

module.exports = router;
