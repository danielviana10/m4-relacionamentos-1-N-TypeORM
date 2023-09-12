import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware";
import ownerRoutes from "./routes/owner.routes";
import petsRoutes from "./routes/pets.routes";

const app: Application = express();

app.use(json());

app.use("/owners", ownerRoutes);
app.use("/pets", petsRoutes);

app.use(handleAppErrorMiddeware);

export default app;
