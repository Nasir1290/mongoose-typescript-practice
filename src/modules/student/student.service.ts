import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  try {
    const response = await StudentModel.create(student);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllStudentFromDB = async () => {
  try {
    const response = await StudentModel.find({});
    return response;
  } catch (error) {
    console.log(error)
  }
};

const getStudentByIdFromDB = async (id:string) => {
  const response = await StudentModel.findById({id});
  return response;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getStudentByIdFromDB
};
