import express from "express";
import { studentControllers } from "./student.controller";

const studentRoute = express.Router();

studentRoute.get("/", studentControllers.getAllStudent);
studentRoute.get("/:id", studentControllers.getAllStudent);
studentRoute.post("/create-student", studentControllers.createStudent);

export default studentRoute;