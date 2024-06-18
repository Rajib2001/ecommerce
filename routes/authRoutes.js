import express from "express";
const router=express.Router();
import { registerController,loginController, isAdmin, forgotPasswordController, profileUpdateController, getOrdersController, getAllOrdersController, orderStatusController } from "../controllers/authController.js";
import { requireSign, testController } from "../middlewares/authmiddleware.js";


router.post("/register",registerController)
router.post("/login",loginController)
router.post("/forgot-password",forgotPasswordController)
router.get("/test",requireSign,isAdmin, testController)
router.get("/user-auth",requireSign,(req,res)=>{
    res.status(200).send({ok:true})

})
router.get("/admin-auth",requireSign,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})

})

router.put("/profile",requireSign,profileUpdateController)

router.get("/orders",requireSign,getOrdersController)
router.get("/all-orders",requireSign,isAdmin,getAllOrdersController)
router.put("/order-status/:orderId",requireSign,isAdmin,orderStatusController)




export default router;
