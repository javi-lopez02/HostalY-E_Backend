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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mail = {
    user: process.env.USER_GMAIL,
    pass: process.env.PASSWORD_GMAIL,
};
let transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: mail.user,
        pass: mail.pass,
    },
});
/**
 * Envio de Emails .
 * @param email - Email de destinatario.
 * @param name - Nombre del destinatario.
 * @param code - Codeigo de verificacion para la validacion.
 *
 * @returns void.
 */
const sendEmail = (email, name, code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transporter.sendMail({
            from: `Nodemailer <${mail.user}>`,
            to: email,
            subject: "Verificacion de Gmail usando nodemailer",
            text: "Hola amigos, suscríbance para más videos",
            html: `
            <head>
                
            </head>
            
            <div id="email___content">
                <img src="data:image/jpeg;base64,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" alt="">
                <h2>Hola ${name}</h2>
                <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
                <a
                    href="http://localhost:3000/api/auth/confirm/${code}"
                    target="_blank"
                >Confirmar Cuenta</a>
            </div>
            `,
        });
    }
    catch (error) {
        console.log("Algo no va bien con el email", error);
    }
});
exports.sendEmail = sendEmail;
