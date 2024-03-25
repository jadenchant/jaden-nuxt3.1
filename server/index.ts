import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.set('strictQuery', false);

export default async () => {
  try {
    const mongoUrl = process.env.MONGO_URL || '';
    mongoose.connect(mongoUrl);
    console.log('DB connection established.');
  } catch (err) {
    console.error('DB connection failed.', err);
  }
};
