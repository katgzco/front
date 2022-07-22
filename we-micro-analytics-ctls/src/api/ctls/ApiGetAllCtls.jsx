import axios from "axios";

const apikey = process.env.REACT_APP_API_KEY_GET_ALL;
const rootUrl =
  process.env.REACT_APP_API_BASE_URL_GET_CTL +
  process.env.REACT_APP_API_BASE_PATH_GET_CTL;

export default axios.create({
  baseURL: rootUrl,
  responseType: "json",
  headers: {
    "api-key": apikey,
    "Content-Type": "application/json",
  },
});
