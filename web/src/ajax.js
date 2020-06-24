import axios from "axios";

export const createImage = (url) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/images",
    headers: {
      "Content-Type": "application/json",
      "credentials": "include"
    },
    data: {url: url}
  }).then(res => console.log(res.data.response));

  console.log("Sent url to server")
};

/*export const deleteImage = (id) => {
  axios.delete(`http://localhost:8080/images/${id}`);
  console.log(id)
};

export const listImages = async () => {
  const result = await axios.get("http://localhost:8080/images");
  return result.data;
};*/
