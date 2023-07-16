const staffController=require('../controller/staffController')
const router=require('express').Router();

router.post("/",staffController.addStaff);
router.get("/",staffController.getAllStaff)
router.put("/:id",staffController.updateStaff)
router.delete("/:id",staffController.deleteStaff);
module.exports=router;