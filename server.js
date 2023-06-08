const express = require("express");

const http=require('http')
const path=require('path')

const { default: mongoose } = require("mongoose");
const route = require("./src/routes/route");
require('dotenv').config();
const { PORT , MONGODB_CONNECT } = process.env;

const app = express();
// mongoose.set()
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')))


mongoose.set('strictQuery', true)

mongoose
  .connect(
        MONGODB_CONNECT,
    { useNewUrlParser: true}
  )
  .then(() => {
    console.log("Server connected with Mongodb");
  })
  .catch((error) => {
    console.log("Error while connecting to the database:", error.message);
  });

app.use("/", route);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
