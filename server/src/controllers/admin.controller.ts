import { Request, Response } from "express";

export const getAdminData = (_: Request, res: Response) => {
  res.json({
    users: [
      { id: 1, name: "Admin", role: "admin" },
      { id: 2, name: "User", role: "user" },
    ],
  });
};