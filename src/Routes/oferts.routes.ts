import { Router } from "express";
import { createOfert, deleteOfert, editOfert, getOfert } from "../Controllers/oferts.controller";

const router = Router();

router.get("/oferts", getOfert);
router.post("/oferts", createOfert);
router.put("/oferts/:id", editOfert);
router.delete("/oferts/:id", deleteOfert);

export default router;
