import axios from "axios";


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const loggedUser = user && JSON.parse(user).loggedUser;
const TOKEN = loggedUser?.accessToken;

export const generalRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export const userRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
  header: { token: `Bearer ${TOKEN}` },
});

