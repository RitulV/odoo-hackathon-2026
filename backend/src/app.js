import express from "express"
import assetRoutes from "./routes/asset.routes.js"
import employeeRoutes from "./routes/employee.routes.js";
import cors from "cors";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/assets", assetRoutes);

export default app;