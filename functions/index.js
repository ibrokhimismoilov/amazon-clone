const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51JNthoAdv8hnqEbOs59wC75ByasI6NHaxWzWFH3kC5oNhV1dV2IyRCtOvCerqDRxSh7mgu6n3ykLbJ2meecZmcoh008sSQNuLG"
);

// API

// App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (requset, response) => {
  const total = requset?.query?.total;

  console.log("Backend ->", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // submits o the currency
    currency: "usd",
  });

  //   OK created 2
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen commmand
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-cfcc1/us-central1/api
