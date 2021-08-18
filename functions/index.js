const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JNthoAdv8hnqEbOO0TtfZDGJeePazJJUHdjZxcfqfYwYfcMnyUI648p0u3RBZqqTdkS4PFe210N4eOHdx4ZtDA900JTc6zuOn"
);

// API

// App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req?.query?.total;

  console.log("Backend ->", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // submits o the currency
      currency: "usd",
    });
    //   OK created 2
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log("CATCH ERROR Backend >>>>>", err);
  }
});

// - Listen commmand
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-cfcc1/us-central1/api
