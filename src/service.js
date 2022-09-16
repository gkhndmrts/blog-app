import axios from "axios";

const API_URL = "https://codeventure-blog-api.herokuapp.com/";

const service = {
  login(email, password) {
    console.log(email, password);
    return axios
      .post(API_URL + "oauth", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", "Bearer " + response.data.token);
        }

        return response.data;
      });
  },

  logout() {
    localStorage.removeItem("user");
  },
  getToken() {
    return localStorage.getItem("user");
  },
  listWithPage(page) {
    return axios.get(API_URL + "posts/" + page);
  },
  savePost({ title, description, image }) {
    const data = JSON.stringify({
      title,
      description,
      image,
    });

    var config = {
      url: API_URL + "posts",
      method: "post",
      headers: {
        Authorization: this.getToken(),
        "Content-Type": "application/json",
      },
      data: data,
    };

    return axios(config);
  },
};

export default service;
