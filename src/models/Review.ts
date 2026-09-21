import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  name: string;
  text: string;
  stars: string;
  imageUrl?: string;
  createdAt: Date;
}

const ReviewSchema: Schema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  stars: { type: String, required: true, default: "★★★★★" },
  imageUrl: { type: String, default: "/doctor_shrina.jpg" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);
