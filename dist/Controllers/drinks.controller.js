"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDrink = exports.editDrink = exports.createDrink = exports.getDrinks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getDrinks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const drinks = yield prisma.drinks.findMany({
            select: {
                id: true,
                price: true,
                name: true,
                imagen: true,
                createdAt: true,
            },
        });
        res.status(200).json({
            data: drinks,
            meta: {
                name: "Estas son las bebidas",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.getDrinks = getDrinks;
const createDrink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, name } = req.body;
    try {
        const drink = yield prisma.drinks.create({
            data: {
                price,
                imagen,
                name,
            },
        });
        res.status(200).json({
            data: drink,
            meta: {
                message: "Bebida creada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.createDrink = createDrink;
const editDrink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, name } = req.body;
    const { id } = req.params;
    try {
        const drink = yield prisma.drinks.update({
            where: { id },
            data: {
                price,
                imagen,
                name,
            },
        });
        res.status(200).json({
            data: drink,
            meta: {
                message: "Bebida editada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.editDrink = editDrink;
const deleteDrink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const drink = yield prisma.drinks.delete({
            where: { id },
        });
        res.status(200).json({
            data: drink,
            meta: {
                message: "Bebida eliminada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.deleteDrink = deleteDrink;
