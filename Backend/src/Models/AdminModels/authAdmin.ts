import mongoose, { Schema, Document } from 'mongoose';

export interface AdminDocument extends Document {
  username: string;
  email: string;
  password: string;
}


const AdminSchema = new Schema<AdminDocument>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
},
{
    timestamps: true,
});

export default mongoose.model<AdminDocument>('Admin', AdminSchema);

