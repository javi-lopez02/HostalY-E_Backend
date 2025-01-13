import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getDrinks = async (req: Request, res: Response) => {
  try {
    const drinks = await prisma.drinks.findMany({
      select: {
        id: true,
        price: true,
        name: true,
        imagen: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      data: drinks,
      meta: {
        name: "Estas son las bebidas",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const createDrink = async (req: Request, res: Response) => {
  const { price, imagen, name } = req.body;
  try {
    const drink = await prisma.drinks.create({
      data: {
        price,
        imagen,
        name,
      },
    });

    res.status(200).json({
      data: drink,
      meta: {
        message: "Bebida creada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const editDrink = async (req: Request, res: Response) => {
  const { price, imagen, name } = req.body;
  const { id } = req.params;

  try {
    const drink = await prisma.drinks.update({
      where: { id },
      data: {
        price,
        imagen,
        name,
      },
    });

    res.status(200).json({
      data: drink,
      meta: {
        message: "Bebida editada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const deleteDrink = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const drink = await prisma.drinks.delete({
      where: { id },
    });
    res.status(200).json({
      data: drink,
      meta: {
        message: "Bebida eliminada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
