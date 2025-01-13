import { Router } from "express";
import { createSnack, deleteSnack, editSnack, getSnacks } from "../Controllers/snacks.controller";

const router = Router();

router.get("/snacks", getSnacks);
router.post("/snacks", createSnack);
router.put("/snacks/:id", editSnack);
router.delete("/snacks/:id", deleteSnack);

export default router;
