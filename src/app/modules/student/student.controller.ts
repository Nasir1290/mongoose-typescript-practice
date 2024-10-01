/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentFromDB();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: result,
      message: "Successfully retrieved all students",
    });
  } catch (error) {
    next(error);
  }
};

const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getStudentByIdFromDB(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: result,
      message: "Successfully retrieved the student",
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await studentServices.deleteStudentFromDB(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: result,
      message: "Successfully delete this student",
    });
    
  } catch (error) {
    next(error);
  }
};

export const studentControllers = {
  getAllStudent,
  getStudentById,
  deleteStudent,
};
