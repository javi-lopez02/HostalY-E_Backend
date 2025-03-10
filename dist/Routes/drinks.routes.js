"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const drinks_controller_1 = require("../Controllers/drinks.controller");
const router = (0, express_1.Router)();
router.get("/drinks", drinks_controller_1.getDrinks);
router.post("/drinks", drinks_controller_1.createDrink);
router.put("/drinks/:id", drinks_controller_1.editDrink);
router.delete("/drinks/:id", drinks_controller_1.deleteDrink);
exports.default = router;
