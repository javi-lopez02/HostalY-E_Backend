import { Router } from "express";
import { createEvents, deleteEvents, editEvents, getEvents } from "../Controllers/events.controller";

const router = Router();

router.get("/events", getEvents);
router.post("/events", createEvents);
router.put("/events/:id", editEvents);
router.delete("/events/:id", deleteEvents);

export default router;
