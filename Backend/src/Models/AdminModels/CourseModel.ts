import mongoose, { Schema, Document } from 'mongoose';

export interface CourseDocument extends Document {
    Admin_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    };
    // Admin_id: string;
    title: string;
    description: string;
    image : string;
    video_url : string;
    price : string;
}

const CourseSchema = new Schema<CourseDocument>({
    Admin_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    },
    // Admin_id:{ type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String},
    video_url: { type: String, required: true },
    price:{ type: String, required: true }
});

export default mongoose.model<CourseDocument>('Courses', CourseSchema);
