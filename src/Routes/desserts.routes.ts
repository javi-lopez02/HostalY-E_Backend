import { Router } from "express";
import {
  createDessert,
  deleteDessert,
  editDessert,
  getDesserts,
} from "../Controllers/desserts.controller";

const router = Router();

router.get("/desserts", getDesserts);
router.post("/desserts", createDessert);
router.put("/desserts/:id", editDessert);
router.delete("/desserts/:id", deleteDessert);

export default router;
