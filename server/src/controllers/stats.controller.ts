import { Request, Response } from "express";

export const getStats = (_: Request, res: Response) => {
  res.json({
    revenue: 82400,
    users: 18920,
    orders: 3210,
    growth: 32,
  });
};