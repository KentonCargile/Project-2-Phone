// create a test data set of valid users
const mongoose = require("mongoose");
require("dotenv").config();
require("../config/dbconnection.js"); // fetch the db connection (MONGO DOESNT EXIST)
const phoneModelVariable = require("../models/phoneLoveModel.js"); // fetch the model to validate our user document before insertion (in database)

const phones = [
  {
    name: "iPhone 12 Pro",
    image:"https://images.pexels.com/photos/3121979/pexels-photo-3121979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 1259,
    color: "black",
    brand: "Apple"
  },

  {
    name: "P40 Lite",
    price: 250,
    color: "grey",
    brand: "Huawei"
  },

  {
    name: "Galaxy S20 FE",
    price: 349,
    color: "white",
    brand: "Samsung"
  },
];

async function insertPhone() {
  try {
    await phoneModelVariable.deleteMany(); // empty the styles db collection
    const inserted = await phoneModelVariable.insertMany(phones); // insert docs in db
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertPhone();