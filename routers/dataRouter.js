const dataController=require('../controller/dataController')

const router=require('express').Router();
router.get("/dataBill/:id",dataController.DataABill);
router.get("/dataBill",dataController.DataBills);
router.get('/dataDishes',dataController.DataDishes)

module.exports=router;