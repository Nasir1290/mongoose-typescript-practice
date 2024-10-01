import express, { Application } from "express";
import cors from "cors";
import studentRoute from "./app/modules/student/student.route";
import { userRoute } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

// application
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());


// routes
app.use("/api/v1/students", studentRoute);
app.use("/api/v1/user",userRoute);


// middlewares

// global error handler
app.use(globalErrorHandler)

// not found handler
app.use(notFound);

// export app
export default app;
