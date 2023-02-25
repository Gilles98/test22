
const express = require('express');
require("dotenv").config();
const app = express();
const router = express.Router();
const analyticsSnd = require("./events/call");
const mongoose = require("mongoose");

app.use(express.json());
app.use(router);

const connectionString = process.env.CONNECTIONSTRING;

router.get('/',  (req,res) => {
  res.send("<h1>Hello</h1>");
console.log("main page");});

router.get('/events', async (req,res) => {
  try {
    console.log("events called");
    res.send(await analyticsSnd.find());
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}).then(
  () => {
    app.listen(3000, ()=> {
      console.log("started");
  })
  }
)

