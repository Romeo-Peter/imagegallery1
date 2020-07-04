const express = require("express");
const cors = require("cors");
const database = require("./database");
const port = 8080;

if (database) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.post("/images", async (req, res) => {
    console.log("POST /images");

    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Methods", "POST,GET,DELETE, HEAD, OPTIONS");

    try {
      const { url } = req.body;

      if (url !== undefined) {
        await database.createImage(url);
        res.json({ StoreResponse: "Image has been inserted in database" });
      }
    } catch (err) {
      res.status(500).json({ Error: "Something unexepcted happend" });
      console.log("Oops: ", err.message);
    }
  });

  app.delete("/images/:id", async (req, res) => {
    console.log("DELETE /images");

    try {
      const { id } = req.params;
      console.log(id);

      if (id !== undefined) {
        await database.deleteImage(id);
        res.json({ deleteResponse: "Image delete from database" });
      } else {
        res.status(400).json({ Error: "Bad request" });
      }
    } catch (err) {
      res.status(500).json({ Error: "Something unexepcted happend" });
      console.log("Oops: ", err.message);
    }
  });

  app.get("/images", async (req, res) => {
    console.log("GET /images");

    try {
      const images = await database.listImages();

      if (images) {
        res.json({ imagesResponse: images });
      }
    } catch (err) {
      res.status(500).json({ Error: "Something unexepcted happend" });
      console.log("Oops: ", err.message);
    }
  });

  app.listen(port, () => {
    console.log("app is running on port 8080");
  });
}
