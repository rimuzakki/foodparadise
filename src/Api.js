import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1/",
  responseType: "json",
  headers: { 'user-key': '424330a0303d74cb437d17c4d8787984' },
});