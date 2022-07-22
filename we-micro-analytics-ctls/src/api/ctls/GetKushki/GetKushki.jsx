import API from "../ApiGetKushki";

export const getKushki = ({ num }) => {
  return API.get(num, { params: {} });
};

