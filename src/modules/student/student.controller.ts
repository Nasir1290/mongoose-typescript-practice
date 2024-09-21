import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentServices.createStudentIntoDB(student);

    if (result) {
      return res.status(200).json({
        success: true,
        message: "Student created successfully",
        data: result,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to create student",
      });
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "An error occurred while creating student",
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
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
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "An error occurred while retrieving students",
    });
  }
};

const getStudentById = async (req: Request, res: Response) => {
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
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message:
        error.message ||
        `An error occurred while retrieving student by ID ${id}`,
    });
  }
};

export const studentControllers = {
  createStudent,
  getAllStudent,
  getStudentById,
};
