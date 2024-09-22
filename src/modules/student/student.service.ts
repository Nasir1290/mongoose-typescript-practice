/* eslint-disable @typescript-eslint/no-explicit-any */
import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (student: TStudent) => {
  try {
    const response = await Student.create(student);
    return response;
  } catch (error) {
    console.error(error);
    // Propagate the error to be handled by the calling function
    throw new Error(error as any);
  }
};

const getAllStudentFromDB = async () => {
  try {
    const response = await Student.find({});
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error as any);
  }
};

const getStudentByIdFromDB = async (id: string) => {
  try {
    const response = await Student.findById(id);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error as any);
  }
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getStudentByIdFromDB,
};
