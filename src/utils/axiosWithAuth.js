import axios from 'axios';

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
      baseURL: "https://web44scaffolding.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};

export default axiosWithAuth;