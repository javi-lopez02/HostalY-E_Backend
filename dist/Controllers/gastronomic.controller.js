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
exports.deleteGastronomic = exports.editGastronomic = exports.createGastronomic = exports.getGastronomic = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getGastronomic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oferts = yield prisma.gastronomic.findMany({
            select: {
                id: true,
                imagen: true,
                price: true,
                description: true,
                createdAt: true,
            },
        });
        res.status(200).json({
            data: oferts,
            meta: {
                name: "hola",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.getGastronomic = getGastronomic;
const createGastronomic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, description } = req.body;
    try {
        const gastronomic = yield prisma.gastronomic.create({
            data: {
                price,
                imagen,
                description,
            },
        });
        res.status(200).json({
            data: gastronomic,
            meta: {
                message: "Comida creada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.createGastronomic = createGastronomic;
const editGastronomic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, description } = req.body;
    const { id } = req.params;
    try {
        const gastronomic = yield prisma.gastronomic.update({
            where: { id },
            data: {
                price,
                imagen,
                description,
            },
        });
        res.status(200).json({
            data: gastronomic,
            meta: {
                message: "Comida editada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.editGastronomic = editGastronomic;
const deleteGastronomic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const gastronomic = yield prisma.gastronomic.delete({
            where: { id },
        });
        res.status(200).json({
            data: gastronomic,
            meta: {
                message: "Comida eliminada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.deleteGastronomic = deleteGastronomic;
