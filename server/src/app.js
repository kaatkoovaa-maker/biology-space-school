import cors from "cors";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import userRoutes from "./routes/userRoutes.js";

export function createApp() {
  const app = express();
  const allowedOrigins = (process.env.CLIENT_URL || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || !allowedOrigins.length || allowedOrigins.includes(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error("Not allowed by CORS"));
      }
    })
  );
  app.use(express.json());

  app.get("/api/health", (request, response) => {
    response.json({ status: "ok", service: "biology-space-school-api" });
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/lessons", lessonRoutes);

  return app;
}
