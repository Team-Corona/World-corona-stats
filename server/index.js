const express = require("express");

const port = process.env.PORT || 8080;
const app = express();
require("dotenv").config();
app.listen(port, () => console.log(`Listening on Port ${port}`));
