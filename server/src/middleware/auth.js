import jwt from "jsonwebtoken";
import { seedUser } from "../data/seedData.js";

export function authMiddleware(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "super-secret-space-key");
    request.user = payload.user || seedUser;
    return next();
  } catch {
    return response.status(401).json({ message: "Invalid token" });
  }
}
