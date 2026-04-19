import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { seedUser } from "../data/seedData.js";
import { User } from "../models/User.js";

const demoUsers = new Map([
  [
    seedUser.email,
    {
      ...seedUser,
      _id: "demo-user",
      demoPassword: "12345678"
    }
  ]
]);

function sign(user) {
  return jwt.sign(
    {
      user: {
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
      }
    },
    process.env.JWT_SECRET || "super-secret-space-key",
    { expiresIn: "7d" }
  );
}

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

export async function register(request, response) {
  const { name, email, password } = request.body;

  if (!email || !password || !name) {
    return response.status(400).json({ message: "Name, email and password are required" });
  }

  if (mongoose.connection.readyState !== 1) {
    if (demoUsers.has(email)) {
      return response.status(409).json({ message: "User already exists" });
    }

    const user = {
      ...seedUser,
      _id: `demo-${demoUsers.size + 1}`,
      name,
      email,
      demoPassword: password
    };
    demoUsers.set(email, user);
    return response.status(201).json({ token: sign(user), user: sanitize(user) });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return response.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    dailyChallenges: seedUser.dailyChallenges,
    achievements: seedUser.achievements
  });

  return response.status(201).json({ token: sign(user), user: sanitize(user) });
}

export async function login(request, response) {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({ message: "Email and password are required" });
  }

  if (mongoose.connection.readyState !== 1) {
    const user = demoUsers.get(email);
    if (!user || user.demoPassword !== password) {
      return response.status(401).json({ message: "Invalid credentials" });
    }

    return response.json({ token: sign(user), user: sanitize(user) });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return response.status(401).json({ message: "Invalid credentials" });
  }

  const matches = await bcrypt.compare(password, user.password);
  if (!matches) {
    return response.status(401).json({ message: "Invalid credentials" });
  }

  return response.json({ token: sign(user), user: sanitize(user) });
}
