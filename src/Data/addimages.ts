// script.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
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
    await prisma.gallery.create({
      data: galleryDatas,
    });
  }

  //Datos de eventos
  const eventsData = [
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/primeros%20(1).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/primeros%20(2).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/primeros%20(3).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/primeros%20(4).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/segundos%20(1).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/segundos%20(2).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/segundos%20(3).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/segundos%20(4).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/terceros%20(1).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/terceros%20(2).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/terceros%20(3).jpg",
    },
    {
      description: "Evento de 15",
      imagen:
        "https://rent-house-six.vercel.app/images/eventos/terceros%20(4).jpg",
    },
  ];

  // Insertar eventos en la base de datos
  for (const eventData of eventsData) {
    await prisma.events.create({
      data: eventData,
    });
  }

  console.log("Galeria y eventos guardados exitosamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
