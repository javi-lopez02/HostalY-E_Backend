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
exports.deleteSnack = exports.editSnack = exports.createSnack = exports.getSnacks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getSnacks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const snacks = yield prisma.snacks.findMany({
            select: {
                id: true,
                price: true,
                name: true,
                imagen: true,
                createdAt: true
            },
        });
        res.status(200).json({
            data: snacks,
            meta: {
                name: "Estas son las meriendas",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.getSnacks = getSnacks;
const createSnack = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, name } = req.body;
    try {
        const snack = yield prisma.snacks.create({
            data: {
                price,
                imagen,
                name,
            },
        });
        res.status(200).json({
            data: snack,
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
exports.createSnack = createSnack;
const editSnack = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { price, imagen, name } = req.body;
    const { id } = req.params;
    try {
        const snack = yield prisma.snacks.update({
            where: { id },
            data: {
                price,
                imagen,
                name,
            },
        });
        res.status(200).json({
            data: snack,
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
exports.editSnack = editSnack;
const deleteSnack = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const snack = yield prisma.snacks.delete({
            where: { id },
        });
        res.status(200).json({
            data: snack,
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
exports.deleteSnack = deleteSnack;
