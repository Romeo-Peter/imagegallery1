const config = require("./config");
const knex = require("knex")(config);

knex.raw("SELECT VERSION()").then(version => {
  console.log("Database connected");
  console.log((version[0][0]));
})
.catch((err) => { console.log( err); throw err })
.finally(() => {
  knex.destroy();
})


exports.createImage = (url) => {
  knex("images").insert(url)
  .then(() => console.log("Url inserted into table"))
  .catch(err => {
    console.log(err);
    // throw err;
  })
  .finally(() => knex.destroy());
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

