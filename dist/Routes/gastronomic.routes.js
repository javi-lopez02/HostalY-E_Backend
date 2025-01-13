"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastronomic_controller_1 = require("../Controllers/gastronomic.controller");
const router = (0, express_1.Router)();
router.get("/gastronomics", gastronomic_controller_1.getGastronomic);
router.post("/gastronomics", gastronomic_controller_1.createGastronomic);
router.put("/gastronomics/:id", gastronomic_controller_1.editGastronomic);
router.delete("/gastronomics/:id", gastronomic_controller_1.deleteGastronomic);
exports.default = router;
