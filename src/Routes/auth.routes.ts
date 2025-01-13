import { Router } from "express";
import {
  register,
  login,
  logout,
  verifyToken,
} from "../Controllers/auth.controller";
import {
  loginAdmin,
  verifyTokenAdmin,
} from "../Controllers/authAdmin.controller";
const router = Router();

router.post("/register", register);

router.get("/verify", verifyToken);

router.post("/login", login);

router.post("/logout", logout);



router.post("/admin/login", loginAdmin);

router.get("/admin/verify", verifyTokenAdmin);

export default router;
