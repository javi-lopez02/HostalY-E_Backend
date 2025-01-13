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
exports.deleteDessert = exports.editDessert = exports.createDessert = exports.getDesserts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getDesserts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const desserts = yield prisma.desserts.findMany({
            select: {
                id: true,
                price: true,
                imagen: true,
                name: true,
                createdAt: true,
            },
        });
        res.status(200).json({
            data: desserts,
            meta: {
                name: "Estos son los postres",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.getDesserts = getDesserts;
const createDessert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, name } = req.body;
    try {
        const dessert = yield prisma.desserts.create({
            data: {
                price,
                imagen,
                name,
            },
        });
        res.status(200).json({
            data: dessert,
            meta: {
                message: "Postre creado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.createDessert = createDessert;
const editDessert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, name } = req.body;
    const { id } = req.params;
    try {
        const dessert = yield prisma.desserts.update({
            where: { id },
            data: {
                price,
                imagen,
                name,
            },
        });
        res.status(200).json({
            data: dessert,
            meta: {
                message: "Postre editado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.editDessert = editDessert;
const deleteDessert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const dessert = yield prisma.desserts.delete({
            where: { id },
        });
        res.status(200).json({
            data: dessert,
            meta: {
                message: "Postre eliminado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.deleteDessert = deleteDessert;
