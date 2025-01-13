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
exports.deleteEvents = exports.editEvents = exports.createEvents = exports.getEvents = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield prisma.events.findMany({
            select: {
                id: true,
                description: true,
                imagen: true,
                createdAt: true,
            },
        });
        res.status(200).json({
            data: events,
            meta: {
                name: "Estas son las fotos de la casa",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.getEvents = getEvents;
const createEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imagen, description } = req.body;
    try {
        const events = yield prisma.events.create({
            data: {
                imagen,
                description,
            },
        });
        res.status(200).json({
            data: events,
            meta: {
                message: "Evento creado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.createEvents = createEvents;
const editEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imagen, description } = req.body;
    const { id } = req.params;
    try {
        const events = yield prisma.events.update({
            where: { id },
            data: {
                imagen,
                description,
            },
        });
        res.status(200).json({
            data: events,
            meta: {
                message: "Evento editado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.editEvents = editEvents;
const deleteEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const events = yield prisma.events.delete({
            where: { id },
        });
        res.status(200).json({
            data: events,
            meta: {
                message: "Evento eliminado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.deleteEvents = deleteEvents;
