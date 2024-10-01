import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: false,
    message: "API Not Found",
    error: {},
  });
};


export default notFound;
