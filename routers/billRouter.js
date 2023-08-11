const billController=require('../controller/billController')
const router=require('express').Router();

router.post("/",billController.addBill);
router.get("/",billController.getAllBill);
router.get("/bill-unpaid/:id",billController.getABillStatusFalse);
router.get("/billOfMonth/:date",billController.getBillOfMonth);
router.get("/billOfDay/:date",billController.getBillOfDay);



router.get("/:id",billController.getABill);
router.put("/:id",billController.updateBill);
router.put("/detailInvoiceOfBill/:id",billController.updateDetailInvoideOfBill);

router.delete("/:id",billController.deleteBill);


module.exports=router;