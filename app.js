const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const db = require("./core/DB/index");
const apiRouter = require("./features/api/apiRouts")


dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", apiRouter);

const port = process.env.PORT || "8000";
const httpServer = http.createServer(app);
httpServer.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`),
);
