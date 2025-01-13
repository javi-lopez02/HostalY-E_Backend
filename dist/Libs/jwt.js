"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = createToken;
//json web token
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const conf_1 = require("../conf");
function createToken(payload) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign({ id: payload }, conf_1.TOKEN_SECRET, { expiresIn: "24h" }, (err, token) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(token);
            }
        });
    });
}
