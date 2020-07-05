import axios from "axios";

export const createImage = (url) => {
  console.log("Request sent to server");

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
};

export const deleteImage = (id) => {
  console.log("Request sent to server");

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
  console.log("Request sent to server");

  return axios({
    method: "GET",
    url: "http://localhost:8080/images",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  })
    .then((res) => {
      console.log(res.data.imagesResponse);
      return res.data.imagesResponse;
    })
    .catch((err) => console.log(err));
};
