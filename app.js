require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require('cors');

app.use(express.json());
app.use(cors());
//MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connection established"))
  .catch(() => console.log("Error connecting to database"))

const allRoutes=require('./routes/productsRoutes')

app.use('/api/',allRoutes)

//Server Running at Port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server started...");
});