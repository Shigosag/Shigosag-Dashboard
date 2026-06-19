import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/auth.routes";
import statsRoutes from "./routes/stats.routes";
import adminRoutes from "./routes/admin.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  })
);

app.use("/auth", authRoutes);
app.use("/stats", statsRoutes);
app.use("/admin", adminRoutes);

export default app;