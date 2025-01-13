import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getSnacks = async (req: Request, res: Response) => {
  try {
    const snacks = await prisma.snacks.findMany({
      select: {
        id: true,
        price: true,
        name: true,
        imagen: true,
        createdAt: true
      },
    });

    res.status(200).json({
      data: snacks,
      meta: {
        name: "Estas son las meriendas",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const createSnack = async (req: Request, res: Response) => {
  const { price, imagen, name } = req.body;
  try {
    const snack = await prisma.snacks.create({
      data: {
        price,
        imagen,
        name,
      },
    });

    res.status(200).json({
      data: snack,
      meta: {
        message: "Postre creado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const editSnack = async (req: Request, res: Response) => {
  const { price, imagen, name } = req.body;
  const { id } = req.params;

  try {
    const snack = await prisma.snacks.update({
      where: { id },
      data: {
        price,
        imagen,
        name,
      },
    });

    res.status(200).json({
      data: snack,
      meta: {
        message: "Postre editado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const deleteSnack = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const snack = await prisma.snacks.delete({
      where: { id },
    });
    res.status(200).json({
      data: snack,
      meta: {
        message: "Postre eliminado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
