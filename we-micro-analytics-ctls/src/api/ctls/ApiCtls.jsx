import Axios from "axios";
export const BuyCTLAPI = async (data) => {
  // URL: Kushki
  const URL = process.env.REACT_APP_POST_BUY_CTL;
  const api_key = process.env.REACT_APP_API_KEY_BUY_API;

  const response = Axios.post(URL, data, {
    headers: {
      "api-key": api_key,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  return response;
};

export const GetCtlsByPerson = async (data) => {
  // URL: Kushki
  const URL = process.env.REACT_APP_API_GET_CTL_BY_PERSON;
  const api_key = process.env.REACT_APP_API_KEY_GET_ALL;

  const response = Axios.post(URL, data, {
    headers: {
      "api-key": api_key,
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });
  return response;
};

export const GetFilePdf = async (data) => {
  let url = "https://kushki-ctl-proyect-g7m25ztakq-uc.a.run.app/getpdf/file";

  return await Axios.post(url, data, {
    headers: {
      "x-api-key": "hJQzuknkGzZWN2ZfNpdMAHhEVOX8Av8rxv1lUtdS",
      accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
};

export const GetFileByUrl = async (data) => {
  const url = "https://kushki-ctl-proyect-g7m25ztakq-uc.a.run.app/getpdf/url";
  return await Axios.post(url, data, {
    "Content-Type": "application/json",
    headers: { "x-api-key": "hJQzuknkGzZWN2ZfNpdMAHhEVOX8Av8rxv1lUtdS" },
  });
};
