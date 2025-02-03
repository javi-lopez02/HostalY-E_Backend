import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Dessert creation", () => {
  it("should create a new dessert in the database", async () => {
    const newDessert = await prisma.desserts.create({
      data: {
        description: "Chocolate Cake",
        price: 12000,
        imagen: "https://example.com/chocolate-cake.jpg",
      },
    });

    expect(newDessert).toHaveProperty("id");
    expect(newDessert.description).toBe("Chocolate Cake");
    expect(newDessert.price).toBe(12000);

    // Limpieza: elimina el postre después de la prueba
    await prisma.desserts.delete({ where: { id: newDessert.id } });
  });
});