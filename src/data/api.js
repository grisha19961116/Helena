const axios = require('axios');
axios.defaults.baseURL = 'https://api.covid19api.com/';

const getAllCountries = async () => {
  const {
    data: { Countries },
  } = await axios.get(`/summary`);
  return Countries;
};

export { getAllCountries };
