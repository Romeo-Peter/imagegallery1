import axios from "axios";

export const createImage = (url) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/images",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    data: { url: url },
  })
    .then((res) => console.log(res.data.storeResponse))
    .catch((err) => console.log(err));

  console.log("Sent url to server");
};

export const deleteImage = (id) => {
  console.log("Image id sent to server");

  console.log(id);
  return axios({
    method: "DELETE",
    url: `http://localhost:8080/images/${id}`,
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  })
    .then((res) => console.log(res.data.deleteResponse))
    .catch((err) => console.log(err));
};

export const listImages = () => {
  return axios({
    method: "GET",
    url: "http://localhost:8080/images",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  })
    .then((res) => console.log(res.data.imagesResponse))
    .catch((err) => console.log(err));
};
