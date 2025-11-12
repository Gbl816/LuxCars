import { Schema, model, Document, Types } from 'mongoose';

export interface ICar {
  brand: string;
  model: string;
  year: number;
  price: number;
  description?: string;
  images?: string[];
  createdBy?: Types.ObjectId;
}

const carSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  images: { type: [String], default: [] },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default model('Car', carSchema);
