const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 3000;

// middleware 
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }))


//database connection with mongoose
const dbURL = `mongodb://localhost:27017/${process.env.DB_NAME}`;
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once('open', () => console.log("Mong DB connect success"));



app.use("/", require('./routes/web'))
app.use("/api", require('./routes/api'))


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
