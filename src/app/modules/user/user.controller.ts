import { NextFunction, Request, Response } from "express";
import { userServices } from './user.service';
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {

    const { password,student } = req.body;


    // const zodeParseData = studentSchemaValidation.parse(student);

    const result = await userServices.createStudentIntoDB(password,student)
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      data: result,
      message: "Successfully create the student",
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(error);
  }
};


export const userControllers = {
    createStudent
}