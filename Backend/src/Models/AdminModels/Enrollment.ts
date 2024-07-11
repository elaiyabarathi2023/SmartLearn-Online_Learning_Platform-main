// src/models/Enrollment.ts

import { Document, Schema, model } from 'mongoose';

export interface EnrollmentModel extends Document {
  userId: string;
  courseId: string;
  // Add more fields as needed
}

const enrollmentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Courses', required: true },
  // Define more fields here
});

export default model<EnrollmentModel>('Enrollment', enrollmentSchema);
