/* eslint-disable @typescript-eslint/no-explicit-any */
import { Student } from "./student.model";


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
    const response = await Student.aggregate([{ $match: { _id: id } }]);

    return response;
  } catch (error) {
    console.error(error);
    throw new Error(error as any);
  }
};

const deleteStudentFromDB = async (id: string) => {
  try {
    const result = await Student.updateOne({ _id: id }, { isDeleted: true });
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error as any);
  }
};

export const studentServices = {
  getAllStudentFromDB,
  getStudentByIdFromDB,
  deleteStudentFromDB,
};
