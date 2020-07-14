const express = require("express");
require("dotenv").config();
console.log(process.env);
const port = process.env.PORT || 8080;
const app = express();
app.listen(port, () => console.log(`Listening on Port ${port}`));
