import { NextFunction, Request, Response } from "express";
import { userServices } from './user.service';

const createStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {

    const { password,student } = req.body;


    // const zodeParseData = studentSchemaValidation.parse(student);

    const result = await userServices.createStudentIntoDB(password,student)
    return res.status(200).json({
        success:true,
        message:"Successfully created student",
        data:result
    })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    next(error);
  }
};


export const userControllers = {
    createStudent
}