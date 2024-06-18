import express from "express";
import { createCategoryController, deleteCategoryController, getAllCategory, singleCategory, updateCategoryController } from "../controllers/createCategoryController.js";
import { requireSign } from "../middlewares/authmiddleware.js";
import { isAdmin } from "../controllers/authController.js";
const router=express.Router()

router.post("/create-category",requireSign,isAdmin,createCategoryController)
router.put("/update-category/:id",requireSign,isAdmin,updateCategoryController)
router.get("/get-category",getAllCategory)
router.get("/single-category/:slug",singleCategory)
router.delete("/delete-category/:id",deleteCategoryController)

export default router;