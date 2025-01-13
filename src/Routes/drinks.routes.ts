import { Router } from "express";
import { createDrink, deleteDrink, editDrink, getDrinks } from "../Controllers/drinks.controller";

const router = Router();

router.get("/drinks", getDrinks);
router.post("/drinks", createDrink);
router.put("/drinks/:id", editDrink);
router.delete("/drinks/:id", deleteDrink);

export default router;
