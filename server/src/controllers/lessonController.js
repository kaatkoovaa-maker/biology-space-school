import mongoose from "mongoose";
import { seedLessons, seedUser } from "../data/seedData.js";
import { Lesson } from "../models/Lesson.js";
import { User } from "../models/User.js";

export async function getLessons(request, response) {
  if (mongoose.connection.readyState !== 1) {
    return response.json(seedLessons);
  }

  const lessons = await Lesson.find().sort({ createdAt: 1 });
  return response.json(lessons);
}

export async function completeLesson(request, response) {
  const { xpEarned = 0 } = request.body;

  if (mongoose.connection.readyState !== 1) {
    const nextXp = seedUser.xp + xpEarned;
    return response.json({
      xp: nextXp,
      level: seedUser.level + Number(nextXp >= seedUser.xpToNext)
    });
  }

  const user = await User.findById(request.user.id);
  user.xp += xpEarned;

  if (user.xp >= user.xpToNext) {
    user.level += 1;
    user.xp -= user.xpToNext;
    user.xpToNext += 250;
  }

  await user.save();
  return response.json({ xp: user.xp, level: user.level, xpToNext: user.xpToNext });
}
