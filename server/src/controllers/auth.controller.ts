import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // demo auth (production = DB check)
  if (email === "admin@shigosag.com" && password === "123456") {
    const token = jwt.sign(
      { id: "1", role: "admin" },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
};