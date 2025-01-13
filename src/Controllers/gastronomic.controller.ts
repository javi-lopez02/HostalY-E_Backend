import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getGastronomic = async (req: Request, res: Response) => {
  try {
    const oferts = await prisma.gastronomic.findMany({
      select: {
        id: true,
        imagen: true,
        price: true,
        description: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      data: oferts,
      meta: {
        name: "hola",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const createGastronomic = async (req: Request, res: Response) => {
  const { price, imagen, description } = req.body;
  try {
    const gastronomic = await prisma.gastronomic.create({
      data: {
        price,
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: gastronomic,
      meta: {
        message: "Comida creada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const editGastronomic = async (req: Request, res: Response) => {
  const { price, imagen, description } = req.body;
  const { id } = req.params;

  try {
    const gastronomic = await prisma.gastronomic.update({
      where: { id },
      data: {
        price,
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: gastronomic,
      meta: {
        message: "Comida editada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const deleteGastronomic = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const gastronomic = await prisma.gastronomic.delete({
      where: { id },
    });
    res.status(200).json({
      data: gastronomic,
      meta: {
        message: "Comida eliminada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
