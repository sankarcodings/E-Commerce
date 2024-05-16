const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const usermodel = require("./mongoo");
const usermodel2 = require("./model2");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/React-Login-Sigin");

app.post("/signin", (req, res) => {
  usermodel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.post("/", (req, res) => {
  const { email, pwd } = req.body;
  usermodel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.pwd === pwd) 
      {
        res.json("Success");
      }
      else {
        res.json("Invalid Password")
      }
    }
    else
    {
        res.json("No Records Found")
    }
  });
});
app.listen(3001, () => {
  console.log("Port Connected");
});
