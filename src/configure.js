const { WireMockRestClient } = require('wiremock-rest-client');

const configureWireMock = ({ username, password, url, logLevel }) => {
  console.log(`Username: ${username}, Password: ${password}, URL: ${url}, logLevel: ${logLevel}`);
  new WireMockRestClient(`https://${username}:${password}@${url}`, {
    logLevel: `${logLevel}`,
    continueOnFailure: false,
  });
};

module.exports = { configureWireMock };
