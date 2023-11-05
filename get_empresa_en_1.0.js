// Coded on - 22/02/01 - v1.0

const axios = require('axios');
const https = require('https');
const util = require('util');
const fs = require('fs');

// Set the access token
const token = 'token here';

// Configure the Axios configuration object with the token header and custom HTTPS agent
const axiosConfig = {
  headers: {
    token: token,
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
};

// Make the GET request with Axios
axios
  .get('write the link to API', axiosConfig)
  .then((response) => {
    // Handle the response here
    const formattedJSON = JSON.stringify(response.data, null, 2);
    fs.writeFileSync('destination path', formattedJSON, 'utf8');
    console.log('JSON saved');
    // console.log(formattedJSON);
    // console.log(response.data);
  })
  .catch((error) => {
    // Handle the error here
    console.error(error);
  });
