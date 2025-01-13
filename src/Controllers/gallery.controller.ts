import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getGallery = async (req: Request, res: Response) => {
  try {
    const gallery = await prisma.gallery.findMany({
      select: {
        id: true,
        description: true,
        imagen: true,
        createdAt: true   
      },
    });

    res.status(200).json({
      data: gallery,
      meta: {
        name: "Estas son las fotos de la casa",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const createGallery = async (req: Request, res: Response) => {
  const { imagen, description } = req.body;
  try {
    const gallery = await prisma.gallery.create({
      data: {
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: gallery,
      meta: {
        message: "Galery creado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const editGallery = async (req: Request, res: Response) => {
  const { imagen, description } = req.body;
  const { id } = req.params;

  try {
    const gallery = await prisma.gallery.update({
      where: { id },
      data: {
        imagen,
        description,
      },
    });

    res.status(200).json({
      data: gallery,
      meta: {
        message: "Galery editado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};

export const deleteGallery = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const gallery = await prisma.gallery.delete({
      where: { id },
    });
    res.status(200).json({
      data: gallery,
      meta: {
        message: "Gallery eliminado correctamente",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Internal server error"]);
  }
};


