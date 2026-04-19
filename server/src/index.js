import dotenv from "dotenv";
import mongoose from "mongoose";
import { createApp } from "./app.js";
import { seedLessons } from "./data/seedData.js";
import { Lesson } from "./models/Lesson.js";

dotenv.config();

const app = createApp();
const port = process.env.PORT || 5000;

async function bootstrap() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/biology-space-school", {
      serverSelectionTimeoutMS: 2000
    });

    const lessonsCount = await Lesson.countDocuments();
    if (!lessonsCount) {
      await Lesson.insertMany(seedLessons);
    }

    console.log("MongoDB connected");
  } catch (error) {
    console.warn("MongoDB unavailable, using demo seed mode");
    console.warn(error.message);
  }

  app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
  });
}

bootstrap();
