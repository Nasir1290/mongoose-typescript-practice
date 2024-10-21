import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

// application
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
// routes
app.use("/api/v1", router);


// default route
const defaultRoute = (req: Request, res: Response) => {
  res.send(
    '<h1 style="color: green; font-weight: bold;text-align:center;height:100vh;display:flex;justify-content:center;align-items:center">Welcome to the School Management Server</h1>',
  );
};

app.use("/api/v1", defaultRoute);
app.use("/", defaultRoute);


// middlewares
// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

// export app
export default app;
