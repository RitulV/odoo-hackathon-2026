import express from "express"
import assetRoutes from "./routes/asset.routes.js"
import employeeRoutes from "./routes/employee.routes.js";

const app = express();

app.use(express.json());
app.use("/employees", employeeRoutes);
app.use("/assets", assetRoutes);

export default app;