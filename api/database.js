const config = require("./config");
const knex = require("knex")(config);

exports.createImage = (url) => {
  return knex("images")
    .insert({ imageurl: url })
    .then(() => console.log("Data inserted into table"))
    .catch((err) => console.log(err));
  // .finally(() => knex.destroy())
};

exports.deleteImage = (id) => {
  return knex("images")
    .where({ id: id })
    .del()
    .then(() => console.log("Url deleted from table"))
    .catch((err) => console.log(err));
  // .finally(() => knex.destroy());
};

exports.listImages = () => {
  return knex
    .from("images")
    .select("*")
    .then((rows) => {
      console.log("Images selected to be listed");
      return rows;
    })
    .catch((err) => console.log(err));
  // .finally(() => knex.destroy());
};
