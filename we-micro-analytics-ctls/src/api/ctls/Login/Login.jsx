import axios from "axios";

export const loginExternalUser = ({ email, password }) => {
  const apikey = process.env.REACT_APP_ENDPOINT_HABI_PROCEDURE_API_KEY;
  const rootUrl =
    process.env.REACT_APP_FORM_API_URL_V2 +
    process.env.REACT_APP_ENDPOINT_HABI_API_PROCEDURE_BASE_PATH;
  const endpointUrl = process.env.REACT_APP_POST_LOGIN_EXTERNAL_USERS;
  const url = rootUrl + endpointUrl;

  return axios({
    url: url,
    method: "POST",
    data: { email, password },
    headers: {
      "x-api-key": apikey,
      "Content-Type": "application/json",
    },
  });
};
