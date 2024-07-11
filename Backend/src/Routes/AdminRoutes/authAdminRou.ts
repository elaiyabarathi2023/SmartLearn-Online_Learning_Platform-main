
import express from 'express';
import { body } from 'express-validator';
import AdminController from '../../Controllers/AdminControllers/authAdminCon';
import authMiddleware from '../../Middleware/authMiddleware';
import CourseController from '../../Controllers/AdminControllers/courseCon';
import { upload } from '../../Multer/multer';
import { Request, Response } from 'express';
import Course from "../../Models/AdminModels/CourseModel";
import authAdminMiddleware from '../../Middleware/adminMiddleware';
import { enrollmentController } from '../../Controllers/AdminControllers/EnrollmentController';

const routerAdmin = express.Router();
const path = require('path');
routerAdmin.post('/signup',AdminController.registerAdmin);
routerAdmin.get('/',AdminController.getAllAdmins);


routerAdmin.post('/login',AdminController.loginAdmin);
routerAdmin.get('/api/profile', authAdminMiddleware, AdminController.getCurrentUser);
//--------------------------------Courses router----------------------------------------------------------------
routerAdmin.post('/courses', upload.single('image'), CourseController.createCourse);
// Get all courses
routerAdmin.get('/courses', CourseController.getAllCourses);

// Get a specific course by ID
routerAdmin.get('/courses/:id', CourseController.getCourseById);

// Update a course by ID
routerAdmin.put('/courses/:id', upload.single('image'),CourseController.updateCourse);

// Delete a course by ID
routerAdmin.delete('/courses/:id', CourseController.deleteCourse);

routerAdmin.get('/courses_by_admin/:adminId', CourseController.getCoursesByAdminID);

routerAdmin.get('/courses/search/:query', CourseController.searchCourses);
// Serve images from the 'uploads' directory
routerAdmin.get('/api/getImage/:imageName', (req, res) => {
  try {
    const imageName = req.params.imageName;
    const imagePath = path.join('D:/SmartLearn-Online_Learning_Platform/Backend/src/uploads', imageName);
    res.sendFile(imagePath);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
//--------------------------------end courses------------------------------------------------------------------------------


routerAdmin.post('/enrollments', enrollmentController.createEnrollment);
// Define a route to get all enrollments
routerAdmin.get('/getAll/enrollments', enrollmentController.getAllEnrollments);
//write a route using getUserCoursesById
routerAdmin.get("/enrolled_courses/:id", enrollmentController.getUserCoursesById);
routerAdmin.get("/enrolled/by_admin_id", enrollmentController.getEnrollmentsByAdminId);
export default routerAdmin;
