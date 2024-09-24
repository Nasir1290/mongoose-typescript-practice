/* eslint-disable @typescript-eslint/no-explicit-any */
import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  try {
    const existingStudent = await Student.isStudentExist(studentData.email);
    if (existingStudent) {
      throw new Error("Student already exists With this email address");
    }
    const createdStudent = await Student.create(studentData);
    const response = await Student.findById({ _id: createdStudent._id }).select(
      "-password",
    );
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
  createStudentIntoDB,
  getAllStudentFromDB,
  getStudentByIdFromDB,
  deleteStudentFromDB,
};
