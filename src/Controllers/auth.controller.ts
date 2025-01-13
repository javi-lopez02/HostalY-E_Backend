import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import { createToken } from "../Libs/jwt";
import { TOKEN_SECRET } from "../conf";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../types";

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const userfind = await prisma.user.findFirst({ where: { username } });

    if (userfind) {
      return res.status(500).json(["Username en uso"]);
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const token = await createToken(String(newUser.id));

    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });

    return res.json({
      userId: newUser.id,
      usermane: newUser.username,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json(["Server Error"]);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(401)
        .json(["Nesecita usuario y contraseña para entrar"]);
    }

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(401).json(["Usuario no encontrado"]);
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json(["Contraseña incorrecta"]);
    }

    const token = await createToken(String(user.id));

    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });
    res.json({
      username: user.username,
      userId: user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Error del servidor"]);
  }
};

export const verifyToken = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  const decode = jwt.verify(token, TOKEN_SECRET) as TokenPayload;
  if (!decode) return res.status(401);

  const userFound = await prisma.user.findUnique({
    where: { id: decode.id },
  });

  if (!userFound) return res.status(401).json(["User Not found"]);

  return res.json({
    userId: userFound.id,
    username: userFound.username,
  });
};

export const logout = (req: Request, res: Response) => {
  console.log("hola");
  res.cookie("token", "", {
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });
  return res.status(200).json({ message: "logout" });
};
