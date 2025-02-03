import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import prismaNew from "../Middlewares/prisma";
const prisma = new PrismaClient();

export const addOfertItem = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const ofertId = (req.query.p || "") as string;
    const quantity = parseInt(req.body.quantity) || 1;

    const priceOfert = await prisma.ofert.findUnique({
      where: {
        id: ofertId,
      },
      select: {
        price: true,
      },
    });

    if (!priceOfert) {
      return res.status(404).json({ message: "Oferta no encontrada" });
    }

    const priceTotal = priceOfert?.price * quantity;

    let orderFind = await prisma.order.findFirst({
      where: {
        userId: userId,
        pending: true,
      },
      include: {
        orderItems: true,
      },
    });

    const ofertFind = orderFind?.orderItems.find(
      (ofert) => ofert.ofertId === ofertId
    );

    if (ofertFind) {
      return res.status(203).json({ message: "Oferta repetida" });
    }

    if (!orderFind) {
      orderFind = await prisma.order.create({
        data: {
          userId: userId,
          pending: true,

          totalAmount: 0,
        },
        include: {
          orderItems: true,
        },
      });
    }

    await prisma.order.update({
      where: {
        id: orderFind.id,
      },
      data: {
        orderItems: {
          create: {
            quantity,
            price: priceTotal,
            ofertId,
          },
        },
        totalAmount: orderFind.totalAmount + priceTotal,
      },
    });

    res.status(200).json({ message: "Producto añadido al carrito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el Producto al carrito." });
  }
};

export const addGastronomicItem = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const gastronomicId = (req.query.p || "") as string;
    const quantity = parseInt(req.body.quantity) || 1;

    const priceGastronomic = await prisma.gastronomic.findUnique({
      where: {
        id: gastronomicId,
      },
      select: {
        price: true,
      },
    });

    if (!priceGastronomic) {
      return res.status(404).json({ message: "Oferta no encontrada" });
    }

    const priceTotal = priceGastronomic?.price * quantity;

    let orderFind = await prisma.order.findFirst({
      where: {
        userId: userId,
        pending: true,
      },
      include: {
        orderItems: true,
      },
    });

    const gastronomicFind = orderFind?.orderItems.find(
      (gastronomic) => gastronomic.gastronomicId === gastronomicId
    );

    if (gastronomicFind) {
      return res.status(203).json({ message: "Oferta repetida" });
    }

    if (!orderFind) {
      orderFind = await prisma.order.create({
        data: {
          userId: userId,
          pending: true,

          totalAmount: 0,
        },
        include: {
          orderItems: true,
        },
      });
    }

    await prisma.order.update({
      where: {
        id: orderFind.id,
      },
      data: {
        orderItems: {
          create: {
            quantity,
            price: priceTotal,
            gastronomicId,
          },
        },
        totalAmount: orderFind.totalAmount + priceTotal,
      },
    });

    res.status(200).json({ message: "Oferta añadida al carrito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar la oferta al carrito." });
  }
};

export const addDessertItem = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const dessertId = (req.query.p || "") as string;
    const quantity = parseInt(req.body.quantity) || 1;

    const priceDessert = await prisma.desserts.findUnique({
      where: {
        id: dessertId,
      },
      select: {
        price: true,
      },
    });

    if (!priceDessert) {
      return res.status(404).json({ message: "Oferta no encontrada" });
    }

    const priceTotal = priceDessert?.price * quantity;

    let orderFind = await prisma.order.findFirst({
      where: {
        userId: userId,
        pending: true,
      },
      include: {
        orderItems: true,
      },
    });

    const dessertFind = orderFind?.orderItems.find(
      (dessert) => dessert.dessertId === dessertId
    );

    if (dessertFind) {
      return res.status(203).json({ message: "Postre repetido" });
    }

    if (!orderFind) {
      orderFind = await prisma.order.create({
        data: {
          userId: userId,
          pending: true,

          totalAmount: 0,
        },
        include: {
          orderItems: true,
        },
      });
    }

    await prisma.order.update({
      where: {
        id: orderFind.id,
      },
      data: {
        orderItems: {
          create: {
            quantity,
            price: priceTotal,
            dessertId,
          },
        },
        totalAmount: orderFind.totalAmount + priceTotal,
      },
    });

    res.status(200).json({ message: "Postre añadido al carrito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar el postre al carrito." });
  }
};

export const getOrderItems = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;

    const items = await prisma.order.findFirst({
      where: {
        userId: userId,
        pending: true,
      },
      select: {
        _count: true,
        totalAmount: true,
        id: true,
        orderItems: {
          orderBy: {
            createdAt: "asc",
          },
          select: {
            id: true,
            price: true,
            quantity: true,
            ofert: true,
            gastronomic: true,
            dessert: true,
          },
        },
      },
    });

    res.status(200).json({
      data: items,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

export const updateGastronomicItem = async (req: Request, res: Response) => {
  try {
    const orderID = (req.query.p || "") as string;
    const quantity = parseInt(req.body.quantity) || 1;
    const price = parseInt(req.body.price) || 1;

    const newPrice = price * quantity;

    const orderItem = await prismaNew.orderItem.update({
      where: {
        id: orderID,
      },
      data: {
        price: newPrice,
        quantity: quantity,
      },
      include: {
        gastronomic: true,
      },
    });

    console.log(orderItem);

    res.status(200).json({
      data: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar la comida." });
  }
};

export const updateDessertItem = async (req: Request, res: Response) => {
  try {
    const orderID = (req.query.p || "") as string;
    const quantity = parseInt(req.body.quantity) || 1;
    const price = parseInt(req.body.price) || 1;

    const newPrice = price * quantity;

    const orderItem = await prismaNew.orderItem.update({
      where: {
        id: orderID,
      },
      data: {
        price: newPrice,
        quantity: quantity,
      },
      include: {
        dessert: true,
      },
    });

    console.log(orderItem);

    res.status(200).json({
      data: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el postre." });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderID = (req.query.p || "") as string;

    const orderItem = await prismaNew.order.update({
      where: {
        id: orderID,
        pending: true,
      },
      data: {
        pending: false,
      },
    });

    res.status(200).json({
      data: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al completar la orden" });
  }
};

export const deleteOrderItem = async (req: Request, res: Response) => {
  try {
    const orderID = (req.query.p || "") as string;

    const orderItem = await prismaNew.orderItem.delete({
      where: {
        id: orderID,
      },
    });

    res.status(200).json({
      data: orderItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar la orden" });
  }
};

export const getOrder = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      select: {
        _count: {
          select: {
            orderItems: true,
          },
        },
        createdAt: true,
        id: true,
        totalAmount: true,
        pending: true,
        user: {
          select: {
            id: true,
            image: true,
            role: true,
            username: true,
          },
        },
      },
    });

    res.status(200).json({
      data: orders,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getOrderItemsAdmin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "El id es requerido" });
    }

    const items = await prisma.orderItem.findMany({
      where: {
        orderId: id,
      },
      select: {
        id: true,
        createdAt: true,
        price: true,
        quantity: true,
        ofert: true,
        dessert: true,
        gastronomic: true,
      },
    });

    if (!items) {
      return res.status(404).json({ message: "Productos no encontrados" });
    }

    return res.status(200).json({
      data: items,
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
