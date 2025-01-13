"use strict";
// script.js
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        //Datos de galeria
        const galleryData = [
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(1).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(2).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(3).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(12).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(5).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(6).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(7).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(8).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(9).jpg",
            },
            {
                description: "Piscina",
                imagen: "https://rent-house-six.vercel.app/images/piscina%20(11).jpg",
            },
            {
                description: "Ranchon",
                imagen: "https://rent-house-six.vercel.app/images/ranchon%20(1).jpg",
            },
            {
                description: "Ranchon",
                imagen: "https://rent-house-six.vercel.app/images/ranchon%20(2).jpg",
            },
            {
                description: "Ranchon",
                imagen: "https://rent-house-six.vercel.app/images/ranchon%20(3).jpg",
            },
            {
                description: "Ranchon",
                imagen: "https://rent-house-six.vercel.app/images/ranchon%20(4).jpg",
            },
            {
                description: "Ranchon",
                imagen: "https://rent-house-six.vercel.app/images/ranchon%20(5).jpg",
            },
            {
                description: "Grill",
                imagen: "https://rent-house-six.vercel.app/images/grill%20(1).jpg",
            },
            {
                description: "Grill",
                imagen: "https://rent-house-six.vercel.app/images/grill%20(2).jpg",
            },
            {
                description: "Grill",
                imagen: "https://rent-house-six.vercel.app/images/grill%20(4).jpg",
            },
            {
                description: "Grill",
                imagen: "https://rent-house-six.vercel.app/images/grill%20(5).jpg",
            },
        ];
        // Insertar galeria en la base de datos
        for (const galleryDatas of galleryData) {
            yield prisma.gallery.create({
                data: galleryDatas,
            });
        }
        //Datos de eventos
        const eventsData = [
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/primeros%20(1).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/primeros%20(2).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/primeros%20(3).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/primeros%20(4).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/segundos%20(1).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/segundos%20(2).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/segundos%20(3).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/segundos%20(4).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/terceros%20(1).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/terceros%20(2).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/terceros%20(3).jpg",
            },
            {
                description: "Evento de 15",
                imagen: "https://rent-house-six.vercel.app/images/eventos/terceros%20(4).jpg",
            },
        ];
        // Insertar eventos en la base de datos
        for (const eventData of eventsData) {
            yield prisma.events.create({
                data: eventData,
            });
        }
        console.log("Galeria y eventos guardados exitosamente.");
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
