import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:4200", // Reemplaza con tu URL de frontend
  credentials: true, // Permite el envío de cookies y encabezados de autenticación
}; // Habilita CORS para solicitudes OPTIONS (preflight)

app.use(cors(corsOptions));

app.use(express.json());

app.use("/auth", authRoutes);

export default app;
