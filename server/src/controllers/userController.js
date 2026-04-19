import mongoose from "mongoose";
import { seedUser } from "../data/seedData.js";
import { User } from "../models/User.js";

function sanitize(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    level: user.level,
    xp: user.xp,
    xpToNext: user.xpToNext,
    streak: user.streak,
    title: user.title,
    currentMission: user.currentMission,
    achievements: user.achievements,
    dailyChallenges: user.dailyChallenges
  };
}

export async function getProfile(request, response) {
  if (mongoose.connection.readyState !== 1) {
    return response.json(sanitize(request.user || seedUser));
  }

  const user = await User.findById(request.user.id).select("-password");
  return response.json(sanitize(user));
}
