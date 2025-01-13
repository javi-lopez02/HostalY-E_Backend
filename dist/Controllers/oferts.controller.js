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
exports.deleteOfert = exports.editOfert = exports.createOfert = exports.getOfert = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getOfert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oferts = yield prisma.ofert.findMany({
            select: {
                id: true,
                price: true,
                description: true,
                createdAt: true,
            },
        });
        res.status(200).json({
            data: oferts,
            meta: {
                name: "Estas son las ofertas",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.getOfert = getOfert;
const createOfert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, description } = req.body;
    try {
        const ofert = yield prisma.ofert.create({
            data: {
                price,
                description,
            },
        });
        res.status(200).json({
            data: ofert,
            meta: {
                message: "Oferta creada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.createOfert = createOfert;
const editOfert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, description } = req.body;
    const { id } = req.params;
    try {
        const ofert = yield prisma.ofert.update({
            where: { id },
            data: {
                price,
                description,
            },
        });
        res.status(200).json({
            data: ofert,
            meta: {
                message: "Oferta editada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.editOfert = editOfert;
const deleteOfert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ofert = yield prisma.ofert.delete({
            where: { id },
        });
        res.status(200).json({
            data: ofert,
            meta: {
                message: "Oferta eliminada correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.deleteOfert = deleteOfert;
