"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("Express Typescript en Vercel");
});
app.get("/ping", (req, res) => {
    res.send("pong 🏓");
});
app.listen(port, (err) => {
    if (err) {
        console.error("No se pudo iniciar el servidor:", err);
    }
    else {
        console.log(`El servidor está escuchando en el puerto ${port}`);
    }
});
