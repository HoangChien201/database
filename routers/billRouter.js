const billController=require('../controller/billController')
const router=require('express').Router();

router.post("/",billController.addBill);
router.get("/",billController.getAllBill);
router.get("/:id",billController.getABill);
router.put("/:id",billController.updateBill);
router.delete("/:id",billController.deleteBill);


module.exports=router;