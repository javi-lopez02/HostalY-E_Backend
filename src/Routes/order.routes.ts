import { Router } from "express";
import { authMiddleware } from "../Middlewares/middlewares";
import { authMiddleware as authAdmin } from "../Middlewares/middlewareAdmin";
import {
  addDessertItem,
  addGastronomicItem,
  addOfertItem,
  deleteOrderItem,
  getOrder,
  getOrderItems,
  getOrderItemsAdmin,
  updateDessertItem,
  updateGastronomicItem,
  updateOrder,
} from "../Controllers/order.controller";
const router = Router();

router.get("/products/order", getOrderItems);

router.post("/oferts/order", authMiddleware, addOfertItem);

router.post("/gastronomics/order", authMiddleware, addGastronomicItem);

router.post("/desserts/order", authMiddleware, addDessertItem);

router.put("/gastronomic/order", authMiddleware, updateGastronomicItem);

router.put("/dessert/order", authMiddleware, updateDessertItem);

router.put("/order", authMiddleware, updateOrder)

router.delete("/products/order", authMiddleware, deleteOrderItem);


router.get("/order", authAdmin, getOrder);

router.get("/order/items/:id", authAdmin, getOrderItemsAdmin);

export default router;
