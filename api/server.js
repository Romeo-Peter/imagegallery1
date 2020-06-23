const express = require("express");
const cors = require("cors");
const database = require("./database");


if (database) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.post("/images", async (req, res) => {
    console.log('POST /');

    res.header("Access-Control-Allow-Origin", "http://http://localhost:3000");
    res.set("Access-Control-Allow-Methods", "POST,GET, DELETE, HEAD, OPTIONS");

    const { url } = req.body;
    await database.createImage(url);

    res.writeHead(200, {"Content-Type": "applicaton/json"})
    res.json({response: "Image url stored in database"});
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
