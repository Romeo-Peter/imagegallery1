const express = require("express");
const cors = require("cors");
const database = require("./database");


if (database) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.post("/images", async (req, res) => {
    console.log('POST /');

    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Methods", "POST,GET,DELETE, HEAD, OPTIONS");

    try {
      const { url } = req.body;

      if (url !== undefined) {
        await database.createImage(url);
        res.json({response: "Image url stored in database"});
      }
    } catch(err) {
      res.status(500).json({Error: "Something unexepcted happend"});
      console.log("Oops:", err.message);
    }
  })

  /*app.delete("/images/:id", async (req, res) => {
    const { id } = req.params;
    await database.deleteImage(id);
    res.json();
  });

  app.get("/images", async (req, res) => {
    const images = await database.listImages();
    res.json(images);
  });*/

  app.listen(8080, () => {
    console.log("app is running on port 8080");
  });
}
