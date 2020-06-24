const config = require("./config");
const knex = require("knex")(config);


exports.createImage = (url) => {
 return knex("images").insert({imageurl: url})
  .then(() => console.log("Data inserted into table"))
  .catch(err => console.log(err))
  // .finally(() => knex.destroy())
};

/*exports.deleteImage = (id) => {
  knex("images").where(id).del()
  .then(() => console.log("Url deleted from table"))
  .catch(err => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
}

exports.listImages = () => {
  knex.select("id", "url").from("images")
  .then(() => console.log("Images selected"))
  .catch(err => {
    console.log(err);
    throw err;
  })
  .finally(() => knex.destroy());
}*/

