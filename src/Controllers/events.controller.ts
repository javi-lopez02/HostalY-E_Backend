import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.events.findMany({
      select: {
        id: true,
        description: true,
        imagen: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      data: events,
      meta: {
        name: "Estas son las fotos de la casa",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const createEvents = async (req: Request, res: Response) => {
  const { imagen, description } = req.body;
  try {
    const events = await prisma.events.create({
      data: {
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: events,
      meta: {
        message: "Evento creado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const editEvents = async (req: Request, res: Response) => {
  const { imagen, description } = req.body;
  const { id } = req.params;

  try {
    const events = await prisma.events.update({
      where: { id },
      data: {
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: events,
      meta: {
        message: "Evento editado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const deleteEvents = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const events = await prisma.events.delete({
      where: { id },
    });
    res.status(200).json({
      data: events,
      meta: {
        message: "Evento eliminado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

