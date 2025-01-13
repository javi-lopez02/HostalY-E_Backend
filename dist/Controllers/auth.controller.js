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
exports.logout = exports.verifyToken = exports.login = exports.register = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../Libs/jwt");
const conf_1 = require("../conf");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const userfind = yield prisma.user.findFirst({ where: { username } });
        if (userfind) {
            return res.status(500).json(["Username en uso"]);
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        const token = yield (0, jwt_1.createToken)(String(newUser.id));
        res.cookie("token", token, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
        });
        return res.json({
            userId: newUser.id,
            usermane: newUser.username,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Server Error"]);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res
                .status(401)
                .json(["Nesecita usuario y contraseña para entrar"]);
        }
        const user = yield prisma.user.findFirst({
            where: {
                username,
            },
        });
        if (!user) {
            return res.status(401).json(["Usuario no encontrado"]);
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json(["Contraseña incorrecta"]);
        }
        const token = yield (0, jwt_1.createToken)(String(user.id));
        res.cookie("token", token, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
        });
        res.json({
            username: user.username,
            userId: user.id,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Error del servidor"]);
    }
});
exports.login = login;
const verifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.cookies;
    if (!token)
        return res.send(false);
    const decode = jsonwebtoken_1.default.verify(token, conf_1.TOKEN_SECRET);
    if (!decode)
        return res.status(401);
    const userFound = yield prisma.user.findUnique({
        where: { id: decode.id },
    });
    if (!userFound)
        return res.status(401).json(["User Not found"]);
    return res.json({
        userId: userFound.id,
        username: userFound.username,
    });
});
exports.verifyToken = verifyToken;
const logout = (req, res) => {
    console.log("hola");
    res.cookie("token", "", {
        httpOnly: false,
        secure: true,
        sameSite: "none",
    });
    return res.status(200).json({ message: "logout" });
};
exports.logout = logout;
