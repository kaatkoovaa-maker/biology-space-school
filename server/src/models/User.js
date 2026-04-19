import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    description: String,
    unlocked: Boolean
  },
  { _id: false }
);

const challengeSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    reward: Number,
    progress: Number,
    total: Number
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    level: { type: Number, default: 1 },
    xp: { type: Number, default: 0 },
    xpToNext: { type: Number, default: 300 },
    streak: { type: Number, default: 1 },
    title: { type: String, default: "Космический новичок" },
    currentMission: { type: String, default: "Завершить первый урок" },
    achievements: { type: [achievementSchema], default: [] },
    dailyChallenges: { type: [challengeSchema], default: [] }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
