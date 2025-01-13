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
        //Datos de bebidas
        const drinksData = [
            {
                name: "Café Expreso",
                imagen: "https://i.pinimg.com/236x/ef/b2/2c/efb22cbcfab1410b503ddcdcede78589.jpg",
                price: 60,
            },
            {
                name: "Cafe Cortado",
                imagen: "https://i.pinimg.com/236x/9f/9f/d4/9f9fd4a23ea693d5793a402634a89bed.jpg",
                price: 100,
            },
            {
                name: "Refresco (Vaso)",
                imagen: "https://i.pinimg.com/236x/4f/79/82/4f7982824c92e010939f0526ac5f9a2e.jpg",
                price: 25,
            },
            {
                name: "Jugo Natural (Sencillo)",
                price: 50,
                imagen: "https://i.pinimg.com/236x/94/77/3f/94773f7c58903330dbaad7a0896f1032.jpg",
            },
            {
                name: "Jugo Natural (Doble)",
                price: 100,
                imagen: "https://i.pinimg.com/236x/75/f0/5c/75f05cb61af5345f1fa9d0d3fecb26df.jpg",
            },
            {
                name: "Coctel de Frutas",
                price: 200,
                imagen: "https://i.pinimg.com/236x/0c/37/65/0c3765bac5e3634d19c494893408b5db.jpg",
            },
            {
                name: "Refresco Gaseado (Lata)",
                price: 230,
                imagen: "https://i.pinimg.com/236x/c3/69/1f/c3691f15ac5daa3cf617613f17613dab.jpg",
            },
            {
                name: "Batidos",
                price: 250,
                imagen: "https://i.pinimg.com/236x/95/99/ec/9599ec69eca4dea2399f82e750c2f0b5.jpg",
            },
            {
                name: "Malta",
                price: 300,
                imagen: "https://i.pinimg.com/236x/07/3f/1f/073f1fcb449d7a9989143455d143f9df.jpg",
            },
            {
                name: "Cerveza",
                price: 300,
                imagen: "https://i.pinimg.com/236x/cf/ac/e5/cface5165268f8f0740136a0da63355b.jpg",
            },
            {
                name: "Tonel de Dispensada",
                price: 20000,
                imagen: "https://i.pinimg.com/236x/b9/b4/f1/b9b4f12ea9d6381960d3e03357eae0d1.jpg",
            },
            {
                name: "Ponche con Frutas",
                price: 300,
                imagen: "https://i.pinimg.com/736x/0c/33/f7/0c33f7eb5f2fd31626075c5875b49ad2.jpg",
            },
            {
                name: "Vino Tinto (Botella)",
                price: 0.0,
                imagen: "https://i.pinimg.com/236x/a7/26/ef/a726efe932a96368bb5e74c26562e958.jpg",
            },
            {
                name: "Vino Blanco (Botella)",
                price: 0.0,
                imagen: "https://i.pinimg.com/236x/fc/4e/e9/fc4ee9b8b5bcedecab5d3cb98aaa6ccb.jpg",
            },
            {
                name: "Vino Dulce (Botella)",
                price: 0.0,
                imagen: "https://i.pinimg.com/236x/77/6c/e6/776ce6d7d4d85beb8974018b68437208.jpg",
            },
            {
                name: "Ron",
                price: 0.0,
                imagen: "https://i.pinimg.com/236x/20/e9/c1/20e9c1e058bda9b90173e5940bc562f1.jpg",
            },
        ];
        // Insertar bebidas en la base de datos
        for (const drinkData of drinksData) {
            yield prisma.drinks.create({
                data: drinkData,
            });
        }
        //Datos de Meriendas
        const snacksData = [
            {
                name: "Pizza Napolitana",
                imagen: "https://i.pinimg.com/236x/aa/ed/48/aaed4892a5d281ed36714f62fe1b3aba.jpg",
                price: 250,
            },
            {
                name: "Pizza de Jamon y Queso",
                imagen: "https://i.pinimg.com/236x/4c/4f/47/4c4f474f10ee75304e471bd18b17259e.jpg",
                price: 300,
            },
            {
                name: "Pizza de Salchicha",
                imagen: "https://i.pinimg.com/236x/2c/e8/21/2ce8211a6c5edcab9ed7eec36d53c93d.jpg",
                price: 300,
            },
            {
                name: "Pizza de Pimiento",
                price: 300,
                imagen: "https://i.pinimg.com/236x/44/eb/29/44eb2925fb2d13eebcb41346abd15324.jpg",
            },
            {
                name: "Pizza de Cebolla",
                price: 300,
                imagen: "https://i.pinimg.com/236x/7b/55/02/7b55028396bb288ada409a34d6be140a.jpg",
            },
            {
                name: "Pizza Hawaiana",
                price: 350,
                imagen: "https://i.pinimg.com/474x/8f/2c/cb/8f2ccb0eeb1466a2603dbf352f093451.jpg",
            },
            {
                name: "Pizza de Vegetales",
                price: 350,
                imagen: "https://i.pinimg.com/236x/76/50/0a/76500ae99e9613808790e5ecddc99aeb.jpg",
            },
            {
                name: "Pizza Mixta",
                price: 600,
                imagen: "https://i.pinimg.com/474x/35/83/09/358309081a759381f2dd056d9166a53e.jpg",
            },
            {
                name: "Pan c/ Salchicha",
                price: 150,
                imagen: "https://i.pinimg.com/474x/e0/98/1f/e0981f520b4eef72ec181fd6b9ff7cdf.jpg",
            },
            {
                name: "Pan c/ Jamon y Queso",
                price: 200,
                imagen: "https://i.pinimg.com/236x/e3/68/6f/e3686fefad8a1496d674b43d565b538a.jpg",
            },
            {
                name: "Pan c/ Hamburguesa Sencilla",
                price: 250,
                imagen: "https://i.pinimg.com/236x/c3/d4/78/c3d47807c960603882a9a95616a66255.jpg",
            },
            {
                name: "Pan c/ Hamburguesa Especial",
                price: 500,
                imagen: "https://i.pinimg.com/236x/78/d5/22/78d522f93810bc9a883c5cdc4869eff4.jpg",
            },
        ];
        // Insertar snacks en la base de datos
        for (const snackData of snacksData) {
            yield prisma.snacks.create({
                data: snackData,
            });
        }
        console.log("Bebidas y meriendas guardados exitosamente.");
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
