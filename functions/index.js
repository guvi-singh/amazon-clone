const functions = require("firebase-functions");
const express = require("express");

const app = express();

// Pass your secret key directly as the argument to the stripe function

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

exports.api = functions.https.onRequest(app);
