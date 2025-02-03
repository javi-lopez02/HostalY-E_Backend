import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ofert creation", () => {
  it("should create a new Ofert in the database", async () => {
    const newOfert = await prisma.ofert.create({
      data: {
        description: "Piscina y Ranchon",
        price: 15000,
      },
    });

    expect(newOfert).toHaveProperty("id");
    expect(newOfert.description).toBe("Piscina y Ranchon");
    expect(newOfert.price).toBe(15000);

    // Limpieza: elimina el postre después de la prueba
    await prisma.ofert.delete({ where: { id: newOfert.id } });
  });
});