const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const db = require("./core/DB/index");
const apiRouter = require("./api/apiRouts")


dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", apiRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const port = process.env.PORT || "8000";

app.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`),
);
