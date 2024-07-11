// src/controllers/EnrollmentController.ts

import { Request, Response } from 'express';
import Enrollment, { EnrollmentModel } from '../../Models/AdminModels/Enrollment';

export class EnrollmentController {
    // Create a new enrollment
    public async createEnrollment(req: Request, res: Response): Promise<void> {
        try {
            const { userId, courseId } = req.body;
            const enrollment: EnrollmentModel = new Enrollment({ userId, courseId });
            await enrollment.save();
            res.status(201).json(enrollment);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    public async getAllEnrollments(req: Request, res: Response): Promise<void> {
        try {
            const enrollments = await Enrollment.find();
            res.status(200).json(enrollments);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    //create a function for getEnrolledById by userId in that model
    public async getUserCoursesById(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            console.log("ID", userId);

            const courses = await Enrollment.find({ userId }).populate('courseId');
            res.status(200).json(courses);
        } catch (error) {
            console.error("Error:", error);
            res.status(400).json({ error: "Failed to retrieve user courses" });
        }
    }

    public async getEnrollmentsByAdminId(req: Request, res: Response): Promise<void> {
        try {
            const enrollments = await Enrollment.find()
                .populate(['courseId', 'userId'])
                .exec();
            res.status(200).json(enrollments);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }



    // Add more controller methods as needed
}

export const enrollmentController = new EnrollmentController();
