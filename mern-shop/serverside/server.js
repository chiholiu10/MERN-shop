const express = require('express');
const app = express();
const Router = require("./routes");
const mongoose = require("mongoose");

require('dotenv').config();
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const URI = `mongodb+srv://${username}:${password}@cluster0.njoye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB');
});

app.use(Router);

app.listen(8080, () => console.log('API is running on http://localhost:8080'));