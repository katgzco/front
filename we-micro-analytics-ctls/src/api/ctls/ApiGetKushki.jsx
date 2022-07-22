import axios from "axios";

const apikey = process.env.REACT_APP_API_KEY_GET_KUSHKI;
const rootUrl =
  process.env.REACT_APP_API_BASE_URL_GET_KUSHKI +
  process.env.REACT_APP_API_BASE_PATH_GET_KUSHKI;

export default axios.create({
  baseURL: rootUrl,
  responseType: "json",
  headers: {
    "api-key": apikey,
    "Content-Type": "application/json",
  },
});
