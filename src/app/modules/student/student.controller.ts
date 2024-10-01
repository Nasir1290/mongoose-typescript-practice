/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";


const getAllStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await studentServices.getAllStudentFromDB();

    if (result && result.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Students retrieved successfully",
        data: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No students found",
      });
    }
  } catch (error) {
    next(error)
  }
};

const getStudentById = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getStudentByIdFromDB(id);

    if (result) {
      return res.status(200).json({
        success: true,
        message: "Student retrieved successfully",
        data: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await studentServices.deleteStudentFromDB(id);
    return res.status(200).json({
      success: true,
      message: "Student has been deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentControllers = {
  getAllStudent,
  getStudentById,
  deleteStudent
};
