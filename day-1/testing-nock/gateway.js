
const axios = require('axios');

module.exports = async (url) => {
  const { status } = await axios.get(url);
  return status;
};
