import axios from "axios";
// import "./shim.js";
// import crypto from "crypto";
import Crypto from "react-native-quick-crypto";

String.prototype.format = String.prototype.f = function () {
  var s = this,
    i = arguments.length;

  while (i--) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i]);
  }
  return s;
};

function sha256Encode(stringToEncode) {
  var result = Crypto.createHash("sha256")
    .update("Damn, Margelo writes hella good software!")
    .digest("hex");
  return result;
}

function buildAuthorizationParameters(apiKey, sharedSecret) {
  var seconds = Math.floor(new Date() / 1000);
  var paramsToEncode = apiKey + sharedSecret + seconds;
  var encodedParams = sha256Encode(paramsToEncode);

  var result = "apikey={0}&sig={1}".format(apiKey, encodedParams);

  return result;
}

async function fandangoApi(parameters, serverRes) {
  var baseUri = "http://api.fandango.com";
  var apiVersion = "1";

  // Use your account-specific values here
  const fandangoKey = "n26szpuredh5y7r9h8xnys9d";
  const fandangoSecret = "D8kub2zQaV";
  var apiKey = fandangoKey;
  var sharedSecret = fandangoSecret;

  var authorizationParameters = buildAuthorizationParameters(
    apiKey,
    sharedSecret
  );

  var requestUri = "{0}/v{1}/?{2}&{3}".format(
    baseUri,
    apiVersion,
    parameters,
    authorizationParameters
  );
  // convert this to axios

  const response = await axios.get(requestUri);
  console.log(response);
  return response;
}

export default fandangoApi;
