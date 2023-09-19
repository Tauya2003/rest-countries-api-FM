import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

const options = {
  url: BASE_URL,
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};