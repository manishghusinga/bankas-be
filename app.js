const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors({
  credentials: true,
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
}));
app.use(bodyParser.json({ limit: '150mb' }));
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/music", require("./route/api"));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
