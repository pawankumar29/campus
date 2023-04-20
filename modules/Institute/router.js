import express from "express";
import { upload } from "../../helpers/commonFunctions.js";
import instituteController from "./controller.js";
const classObject=new instituteController();
const Router=express.Router();



Router.route("/addInstitute").post(upload.single("studentFile"),classObject.addInstitute);

Router.route("/all_Institutes").get(classObject.getInstituteList);
Router.route("/hiringInstitutes").get(classObject.getHiringInstituteList);
Router.route("/deleteInstitute/:_id").delete(classObject.removeInstitute);
Router.route("/view_institute/:institute_id").get(classObject.viewInstitute);
Router.route("/getEditInstitute/:institute_id").get(classObject.getEditInstitute);
Router.route("/uploadStudent/:institute_id").post(classObject.uploadStudentFile);


export default Router;