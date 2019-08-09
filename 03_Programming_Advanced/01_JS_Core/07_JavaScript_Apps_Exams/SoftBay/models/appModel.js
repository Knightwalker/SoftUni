const kinveyAppKey = "kid_BkhXN1mGS";
const kinveyAppSecret = "1cf5f904786c4199a5b77f36384729be";
const kinveyBaseUrl = "https://baas.kinvey.com";

const kinveyAppAuthHeaders = {
  "authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
};

const kinveyAppAuthHeaders2 = {
  "authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
  "content-type": "application/json"
};