import { Request, Response } from "express";
import axios from "axios";
import { CityType } from "../models/City";

export const getCitiesByZipcode = async (req: Request, res: Response) => {
  const baseUrl = process.env.API_URL;
  const zipcode: string | undefined = req.query.zipcode as string;

  // zipcode param validation
  if (!zipcode || typeof zipcode !== "string") {
    return res.status(400).json({
      success: false,
      error: "Le paramètre zipcode est manquant ou invalide",
    });
  }

  try {
    // cities api call
    const response = await axios.get(baseUrl + zipcode);

    if (response.data.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Aucune ville trouvée pour le code postal fourni.",
      });
    }

    const cities: string[] = response.data.map((city: CityType) => city.nom);

    return res.json({
      success: true,
      cities: cities,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Cities API error
      if (error.response) {
        return res.status(502).json({
          success: false,
          error: "Erreur de l'API tierce. Veuillez réessayer plus tard.",
        });
      } else if (error.request) {
        // Network error
        return res.status(503).json({
          success: false,
          error: "Erreur de réseau. Veuillez réessayer plus tard.",
        });
      }
    }
    return res.status(500).json({
      success: false,
      error: "Erreur lors de la récupération des données de l'API.",
    });
  }
};
