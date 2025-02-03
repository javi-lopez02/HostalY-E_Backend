import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getDesserts = async (req: Request, res: Response) => {
  try {
    const desserts = await prisma.desserts.findMany({
      select: {
        id: true,
        price: true,
        imagen: true,
        description: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      data: desserts,
      meta: {
        name: "Estos son los postres",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const createDessert = async (req: Request, res: Response) => {
  const { price, imagen, description } = req.body;
  try {
    const dessert = await prisma.desserts.create({
      data: {
        price,
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: dessert,
      meta: {
        message: "Postre creado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const editDessert = async (req: Request, res: Response) => {
  const { price, imagen, description } = req.body;
  const { id } = req.params;

  try {
    const dessert = await prisma.desserts.update({
      where: { id },
      data: {
        price,
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: dessert,
      meta: {
        message: "Postre editado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const deleteDessert = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const dessert = await prisma.desserts.delete({
      where: { id },
    });
    res.status(200).json({
      data: dessert,
      meta: {
        message: "Postre eliminado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
