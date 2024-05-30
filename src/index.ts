import express from "express";
import { getCitiesByZipcode } from "./controllers/cityController";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// JSON parser Middleware
app.use(express.json());

// Route GET /cities
app.get("/cities", getCitiesByZipcode);

// server start
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
