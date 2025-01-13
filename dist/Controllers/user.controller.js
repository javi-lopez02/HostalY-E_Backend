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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.editUserAdmin = exports.createUser = exports.getUserID = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany({
            where: {
                isDeleted: false,
            },
            select: {
                id: true,
                username: true,
                image: true,
                role: true,
                createdAt: true,
            },
        });
        res.status(200).json({
            data: users,
        });
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getUsers = getUsers;
const getUserID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = req.params.id;
        if (!userID) {
            return res.status(403).json({ message: "Falta el id del usuario" });
        }
        const userFind = yield prisma.user.findUnique({
            where: {
                id: userID,
                isDeleted: false,
            },
            select: {
                id: true,
                username: true,
                image: true,
                role: true,
                createdAt: true,
            },
        });
        if (!userFind) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }
        res.status(200).json({
            data: userFind,
        });
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getUserID = getUserID;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, image, role } = req.body;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield prisma.user.create({
            data: {
                username,
                role,
                image,
                password: hashedPassword,
            },
        });
        res.status(201).json({
            data: user,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el usuario." });
    }
});
exports.createUser = createUser;
const editUserAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, image, role } = req.body;
        const { id } = req.params;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield prisma.user.update({
            where: {
                id,
                isDeleted: false,
            },
            data: {
                username,
                role,
                image,
                password: hashedPassword,
            },
        });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(201).json({
            data: user,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el usuario." });
    }
});
exports.editUserAdmin = editUserAdmin;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, image } = req.body;
        const userId = req.userId;
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield prisma.user.update({
            where: {
                id: userId,
                isDeleted: false,
            },
            data: {
                username,
                image,
                password: hashedPassword,
            },
        });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({
            data: user,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al editar el usuario." });
    }
});
exports.editUser = editUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield prisma.user.update({
            where: {
                id,
            },
            data: {
                isDeleted: true,
            },
        });
        res.status(200).json({
            message: "Usuario eliminado con exito",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el usuario." });
    }
});
exports.deleteUser = deleteUser;
