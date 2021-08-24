const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');
const { request, response } = require('express');
const stripe = require("stripe")
('sk_test_51JRryCSID1A3xQMU6zmBs3odoGjWzppo4suDnus2au6jYMOZ4kuHjPrXEmBem0dVuYMbNWVnKtxWljLIdLvRaeKm00Hoqllnmd')

// API

// App config
const app = express();

// -Middleware
app.use(cors({ origin: true}));
app.use(express.json());
// API ROUTES
app.get('/',(request,response) => response.status(200).send('HELLO WORLD'))
// Listen Command
exports.api = functions.https.onRequest(app)