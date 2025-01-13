import { Router } from "express";
import {
  createGallery,
  deleteGallery,
  editGallery,
  getGallery,
} from "../Controllers/gallery.controller";

const router = Router();

router.get("/gallery", getGallery);
router.post("/gallery", createGallery);
router.put("/gallery/:id", editGallery);
router.delete("/gallery/:id", deleteGallery);

export default router;
