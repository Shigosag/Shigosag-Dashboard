import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string().min(20),
  PORT: z.string().optional(),
});

export const env = envSchema.parse(process.env);