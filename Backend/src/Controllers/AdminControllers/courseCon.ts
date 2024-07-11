import Course from "../../Models/AdminModels/CourseModel";
import { Request, Response } from 'express';
import fs from 'fs';
// import { v2 as cloudinary } from 'cloudinary';
const cloudinary = require('cloudinary').v2;
// Create a new course
class CourseController {
    // static async createCourse(req: Request, res: Response) {
    //     try {
    //         const { Admin_id, title, description, image } = req.body;
    //         const file = req.files as Express.Multer.File[];
    //         const image = req.file.filename;
    //         const course = new Course({
    //             Admin_id,
    //             title,
    //             description,
    //             image,
    //         });
    //         const savedCourse = await course.save();
    //         res.status(201).json(savedCourse);
    //     } catch (error) {
    //         res.status(500).json({ error: 'Could not create the course.' });
    //     }
    // };

    static async createCourse(req: Request, res: Response) {
        try {
            const { Admin_id, title, description, video_url,price  } = req.body;

            // Check if req.file is defined
            if (req.file) {
                const image = req.file.filename; // Get the uploaded image filename

                const course = new Course({
                    Admin_id,
                    title,
                    description,
                    image,
                    video_url,
                    price
                });

                const savedCourse = await course.save();
                res.status(201).json(savedCourse);
            } else {
                console.log("failed to create");
                res.status(400).json({ error: 'No file uploaded.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Could not create the course.' });
        }
    }



    // Get all courses
    static async getAllCourses(req: Request, res: Response) {
        try {
            const courses = await Course.find().populate('Admin_id'); // Use populate to include Admin details
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: 'Could not fetch courses.' });
        }
    };

    // Get a specific course by ID
    static async getCourseById(req: Request, res: Response) {
        try {
            const courseId = req.params.id;
            const course = await Course.findById(courseId).populate('Admin_id'); // Use populate to include Admin details
            if (!course) {
                return res.status(404).json({ error: 'Course not found.' });
            }
            res.json(course);
        } catch (error) {
            res.status(500).json({ error: 'Could not fetch the course.' });
        }
    };

    // Update a course by ID
    static async updateCourse(req: Request, res: Response) {
        try {
          let courseId = req.params.id;
          console.log("courseID", courseId);
      
          if (req.file) {
            // The image file will be available in req.file
            const updatedCourse = {
              ...req.body,
              img_url: req.file.filename, // Assuming you save the filename in the database
            };
      
            let course = await Course.findOneAndUpdate({ _id: courseId }, updatedCourse, { new: true });
      
            if (!course) {
              return res.status(404).send('No course found');
            }
      
            res.send(updatedCourse);
          } else {
            let updatedCourse = { ...req.body };
            let course = await Course.findOneAndUpdate({ _id: courseId }, updatedCourse, { new: true });
      
            if (!course) {
              return res.status(404).send('No course found');
            }
      
            res.send(updatedCourse);
          }
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }
    


    // Delete a course by ID
    static async deleteCourse(req: Request, res: Response) {
        try {
            const courseId = req.params.id;
            const deletedCourse = await Course.findByIdAndRemove(courseId);
            if (!deletedCourse) {
                return res.status(404).json({ error: 'Course not found.' });
            }
            res.json(deletedCourse);
        } catch (error) {
            res.status(500).json({ error: 'Could not delete the course.' });
        }
    };

    // static async getAdminCoursesById(req: Request, res: Response) {
    //     try {
    //         const adminId = req.params.adminId;
    //         const courses = await Course.find({ 'Admin_id._id': adminId });
    //         res.json(courses);
    //     } catch (error) {
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // };
    // get courses by particular admin id
    static async getCoursesByAdminID(req: Request, res: Response) {
        try {
            const adminId = req.params.adminId; // Change this line
            const courses = await Course.find({ Admin_id: adminId });
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Search for courses based on a search query
    
    static async searchCourses(req: Request, res: Response) {
        try {
            const query = req.params.query;

            // Use a regular expression to perform a case-insensitive search
            const regex = new RegExp(query, 'i');

            const courses = await Course.find({
                $or: [
                    { title: { $regex: regex } },
                    { description: { $regex: regex } },
                ],
            }).populate('Admin_id');

            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: 'Could not perform the search.' });
        }
    }




}
export default CourseController;
