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
exports.verifyTokenAdmin = exports.loginAdmin = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../Libs/jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const conf_1 = require("../conf");
const prisma = new client_1.PrismaClient();
const loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res
                .status(401)
                .json(["Nesecita usuario y contraseña para logearce"]);
        }
        const user = yield prisma.user.findFirst({
            where: {
                username,
            },
        });
        if (!user || user.role === "USER") {
            return res.status(401).json(["Usuario no Valido"]);
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json(["Credenciales Incorrentas"]);
        }
        const token = yield (0, jwt_1.createToken)(String(user.id));
        res.cookie("token", token, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
        });
        res.json({
            username: user.username,
            role: user.role,
            id: user.id,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Error del servidor"]);
    }
});
exports.loginAdmin = loginAdmin;
const verifyTokenAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.cookies;
        if (!token)
            return res.status(401);
        const decode = jsonwebtoken_1.default.verify(token, conf_1.TOKEN_SECRET);
        if (!decode)
            return res.status(401);
        const userFound = yield prisma.user.findUnique({
            where: { id: decode.id },
        });
        if (!userFound || userFound.role === "USER")
            return res.status(401).json(["User Not Valid"]);
        return res.json({
            userId: userFound.id,
            username: userFound.username,
            userRole: userFound.role,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(["Error del servidor"]);
    }
});
exports.verifyTokenAdmin = verifyTokenAdmin;
