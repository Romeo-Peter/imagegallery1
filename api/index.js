const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "developer",
      password: "telefoanele39",
      database: "images"
    }
  });

  const createImages = (title, URL) =>
    knex("images").insert({ id, url });

  const deleteImages = id =>
    knex("images")
      .where("id", "=", id)
      .del();

  const listImages = () => knex.select("id", "url").from("images");

  const run = async () => {

  };

  run();

