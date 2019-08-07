const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
const db = require("./db");
const sellerRouter = require("./seller/router");

app.use(sellerRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));
