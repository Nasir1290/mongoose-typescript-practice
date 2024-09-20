import express, { Application } from "express";
import cors from "cors";
import studentRoute from "./modules/student/student.route";

// application
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());




// routes
app.use("/api/v1/students", studentRoute);
export default app;
