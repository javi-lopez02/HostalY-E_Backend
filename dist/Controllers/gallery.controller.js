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
exports.deleteGallery = exports.editGallery = exports.createGallery = exports.getGallery = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getGallery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gallery = yield prisma.gallery.findMany({
            select: {
                id: true,
                description: true,
                imagen: true,
                createdAt: true
            },
        });
        res.status(200).json({
            data: gallery,
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
exports.getGallery = getGallery;
const createGallery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imagen, description } = req.body;
    try {
        const gallery = yield prisma.gallery.create({
            data: {
                imagen,
                description,
            },
        });
        res.status(200).json({
            data: gallery,
            meta: {
                message: "Galery creado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.createGallery = createGallery;
const editGallery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imagen, description } = req.body;
    const { id } = req.params;
    try {
        const gallery = yield prisma.gallery.update({
            where: { id },
            data: {
                imagen,
                description,
            },
        });
        res.status(200).json({
            data: gallery,
            meta: {
                message: "Galery editado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.editGallery = editGallery;
const deleteGallery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const gallery = yield prisma.gallery.delete({
            where: { id },
        });
        res.status(200).json({
            data: gallery,
            meta: {
                message: "Gallery eliminado correctamente",
            },
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Internal server error"]);
    }
});
exports.deleteGallery = deleteGallery;
