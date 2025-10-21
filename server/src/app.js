// server/src/app.js

import express from "express";
import cors from "cors";
import morgan from "morgan";
//doc
import swaggerUi from "swagger-ui-express";
import { swaggerDoc } from "./configs/swagger.config.js";
import { notFoundMiddleware } from "./middlewares/notfound.middleware.js";
import { defaultErrorMiddleware } from "./middlewares/default-error.middleware.js";

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//not found
app.use(notFoundMiddleware);
app.use(defaultErrorMiddleware);

export default app;
