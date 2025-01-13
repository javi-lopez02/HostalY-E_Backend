import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getOfert = async (req: Request, res: Response) => {
  try {
    const oferts = await prisma.ofert.findMany({
      select: {
        id: true,
        price: true,
        description: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      data: oferts,
      meta: {
        name: "Estas son las ofertas",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const createOfert = async (req: Request, res: Response) => {
  const { price, description } = req.body;
  try {
    const ofert = await prisma.ofert.create({
      data: {
        price,
        description,
      },
    });

    res.status(200).json({
      data: ofert,
      meta: {
        message: "Oferta creada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const editOfert = async (req: Request, res: Response) => {
  const { price, description } = req.body;
  const { id } = req.params;

  try {
    const ofert = await prisma.ofert.update({
      where: { id },
      data: {
        price,
        description,
      },
    });

    res.status(200).json({
      data: ofert,
      meta: {
        message: "Oferta editada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const deleteOfert = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const ofert = await prisma.ofert.delete({
      where: { id },
    });
    res.status(200).json({
      data: ofert,
      meta: {
        message: "Oferta eliminada correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};
