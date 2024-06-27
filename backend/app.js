import express from "express";
import { dbConnection } from "./database/dbConnection.js";

dbConnection();

app.use(errorMiddleware);
export default app;
