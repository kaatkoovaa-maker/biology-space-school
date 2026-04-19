import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    id: String,
    question: String,
    options: [String],
    answer: String
  },
  { _id: false }
);

const lessonSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    planetId: { type: String, required: true },
    title: { type: String, required: true },
    theory: [String],
    image: String,
    rewardXp: Number,
    quiz: [questionSchema]
  },
  { timestamps: true }
);

export const Lesson = mongoose.model("Lesson", lessonSchema);
