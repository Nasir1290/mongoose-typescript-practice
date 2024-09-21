import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  try {
    const response = await StudentModel.create(student);
    return response;
  } catch (error) {
    console.error(error);
    // Propagate the error to be handled by the calling function
    throw new Error(error as any);
  }
};

const getAllStudentFromDB = async () => {
  try {
    const response = await StudentModel.find({});
    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error as any);
  }
};

const getStudentByIdFromDB = async (id: string) => {
  try {
    const response = await StudentModel.findById(id);
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
