import { Router } from "express";
import { createGastronomic, deleteGastronomic, editGastronomic, getGastronomic } from "../Controllers/gastronomic.controller";

const router = Router();

router.get("/gastronomics", getGastronomic);
router.post("/gastronomics", createGastronomic);
router.put("/gastronomics/:id", editGastronomic);
router.delete("/gastronomics/:id", deleteGastronomic);

export default router;
