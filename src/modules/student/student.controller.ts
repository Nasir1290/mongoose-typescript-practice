import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await studentServices.getStudentByIdFromDB(id);
  res.status(200).json({
    success: true,
    message: "Student retrieved successfully",
    data: result,
  });
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getStudentById
};
