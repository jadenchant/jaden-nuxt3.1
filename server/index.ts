import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.set('strictQuery', false);

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB connection established.');
  } catch (err) {
    console.error('DB connection failed.', err);
  }
};
