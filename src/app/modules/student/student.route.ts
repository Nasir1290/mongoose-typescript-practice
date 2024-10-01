import express from "express";
import { studentControllers } from "./student.controller";

const studentRoute = express.Router();

studentRoute.get("/", studentControllers.getAllStudent);
studentRoute.get("/:id", studentControllers.getAllStudent);
studentRoute.patch("/delete-student/:id", studentControllers.deleteStudent);

export default studentRoute;
