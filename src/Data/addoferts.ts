// script.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type Oferts = {
  price: number;
  description: string;
};
async function main() {
  // Datos de ofertas
  const ofertsData: Oferts[] = [
    { price: 15000, description: "Área de la piscina, Área del ranchón" }, // cat-1
    {
      price: 20000,
      description:
        "50 croquetas de pollo, 5 Platos de Chicharritas, Refresco 6lt",
    }, // cat-2
    {
      price: 27000,
      description: "Ensalada fría, 50 croquetas de pollo",
    }, // cat-3
    {
      price: 28000,
      description: "60 mini hamburguesas de pollo, 1 caja de cerveza",
    }, // cat-4
    {
      price: 28000,
      description: "30 hamburguesas de pollo, 1 caja de cerveza",
    }, // cat-5
    {
      price: 30000,
      description: "Caldosa, 1 caja de cerveza",
    }, // cat-6
    {
      price: 36000,
      description:
        "Bocaditos con lechón (Ensalada y Mojito) ,Refresco 6lt, 1 caja de cerveza",
    }, // cat-7
    {
      price: 39000,
      description: "Arroz Frito, Viandas y Ensalada",
    }, // cat-8
    {
      price: 39000,
      description: "Arroz Congris, Vianda y Ensalada",
    }, // cat-9
    {
      price: 50000,
      description:
        "Arroz congris, Chuleta de Cerdo, Viandas y Ensalada, 1 caja de cerveza",
    }, // cat-10
  ];

  // Insertar ofertas
  for (const ofertData of ofertsData) {
    await prisma.ofert.create({
      data: ofertData,
    });
  }

  // Datos de gastronomicos con ofertId actualizados
  const gastronomicsData = [
    {
      description: "Caldoza",
      imagen: "https://rent-house-six.vercel.app/images/comidas/caldosa.jpg",
      price: 10000,
    },
    {
      description: "Espaguetis de Jamón y Queso",
      imagen: "https://rent-house-six.vercel.app/images/comidas/espaguetis.jpg",
      price: 20000,
    },
    {
      description: "Arroz Congris, Pollo Asado, Viandas y Ensaladas",
      imagen: "https://rent-house-six.vercel.app/images/comidas/congris.jpg",
      price: 24000,
    },
    {
      description: "Arroz Frito, Viandas y Ensaladas",
      price: 24000,
      imagen:
        "https://rent-house-six.vercel.app/images/comidas/arroz%20frito.jpg",
    },
    {
      description: "Arroz Amarillo con Carne y Maiz, Viandas y Ensaladas",
      price: 24000,
      imagen:
        "https://rent-house-six.vercel.app/images/comidas/arroz%20amarillo.jpg",
    },
    {
      description:
        "Arroz Congris, Chuleta o Bistec de Cerdo, Viandas y Ensaladas",
      price: 30000,
      imagen:
        "https://rent-house-six.vercel.app/images/comidas/Congr%C3%AD.jpg",
    },
    {
      description: "Arroz Congris, Pollo a la Barbacoa, Viandas y Ensaladas",
      price: 30000,
      imagen:
        "https://rent-house-six.vercel.app/images/comidas/congris%20barbacoa.jpg",
    },
    {
      description: "Arroz Congris, Bistec de Pechuga, Viandas y Ensaladas",
      price: 30000,
      imagen:
        "https://rent-house-six.vercel.app/images/comidas/congris%20pechga.jpg",
    },
    {
      description: "Arroz y Frijoles, Fajitas de Pollo, Viandas y Ensaladas",
      price: 30000,
      imagen: "https://rent-house-six.vercel.app/images/comidas/frijoles.jpg",
    },
    {
      description: "Lasaña a la Boloñesa de Jamón y Queso",
      price: 30000,
      imagen:
        "https://rent-house-six.vercel.app/images/comidas/lasa%C3%B1a.jpg",
    },
  ];

  // Insertar gastronomicos en la base de datos
  for (const gastronomicData of gastronomicsData) {
    await prisma.gastronomic.create({
      data: gastronomicData,
    });
  }

  //Postres

  const dessertsData = [
    {
      name: "Panquecitos",
      imagen:
        "https://i.pinimg.com/236x/9e/c4/f8/9ec4f835c10bdab5768d53289e89175e.jpg",
      price: 1800,
    },
    {
      name: "Emp. de Guayaba",
      imagen:
        "https://i.pinimg.com/236x/9f/b7/a3/9fb7a3fc7c36395fd49cec2a8c165143.jpg",
      price: 1800,
    },
    {
      name: "Emp. de Coco",
      imagen:
        "https://i.pinimg.com/236x/42/5b/66/425b6646337129682be8fc4fbd919044.jpg",
      price: 2100,
    },
    {
      name: "Gelatina",
      price: 3000,
      imagen: "https://rent-house-six.vercel.app/images/postres/gelatina.jpg",
    },
    {
      name: "Natilla",
      price: 3000,
      imagen:
        "https://i.pinimg.com/236x/5a/9a/3a/5a9a3a8ee9be117a5ad8d940e1ca9227.jpg",
    },
    {
      name: "NatiFlan",
      price: 3000,
      imagen: "https://rent-house-six.vercel.app/images/postres/flan.jpg",
    },
    {
      name: "Arroz con Leche",
      price: 5000,
      imagen:
        "https://i.pinimg.com/236x/8b/7e/02/8b7e02c7d140f26cb34c505aadd8205c.jpg",
    },
    {
      name: "Helado",
      price: 6000,
      imagen: "https://rent-house-six.vercel.app/images/postres/helado.jpg",
    },
    {
      name: "Pudín",
      price: 10000,
      imagen: "https://rent-house-six.vercel.app/images/postres/pudin.jpg",
    },
    {
      name: "Ensalada Fría",
      price: 10000,
      imagen:
        "https://i.pinimg.com/236x/be/95/df/be95dfde5ec959e81d7184d48dad7e39.jpg",
    },
  ];

  // Insertar desserts en la base de datos
  for (const dessertData of dessertsData) {
    await prisma.desserts.create({
      data: dessertData,
    });
  }

  console.log("Ofertas, comidas y postres guardados exitosamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
