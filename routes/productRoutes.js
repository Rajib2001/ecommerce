import express  from "express";
import { requireSign } from "../middlewares/authmiddleware.js";
import { isAdmin } from "../controllers/authController.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deletePhotoController, filterProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productListController, productPhotoController, realatedProductController, searchProductController,  updateProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
import braintree from "braintree"; 
const router=express.Router()


router.post("/create-product",requireSign,isAdmin,formidable(),createProductController)
router.get("/get-product",getProductController)
router.get("/get-product/:slug",getSingleProductController)
router.get("/product-photo/:pid",productPhotoController)
router.delete("/delete-product/:pid",deletePhotoController)
router.put("/update-product/:pid",requireSign,isAdmin,formidable(),updateProductController)
router.post("/product-filters/",filterProductController)
router.get("/product-count/",productCountController)
router.get("/product-list/:page",productListController)
router.get("/search/:keyword",searchProductController)
router.get("/related-product/:pid/:cid",realatedProductController)
router.get("/product-category/:slug",productCategoryController)

router.get("/braintree/token",braintreeTokenController)
router.post("/braintree/payment",requireSign,brainTreePaymentController)











export default router;