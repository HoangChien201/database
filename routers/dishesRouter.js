const dishesController=require('../controller/dishesController');
const router=require('express').Router();

router.get("/",dishesController.getAllDishes);
router.post("/",dishesController.addDish);
router.put("/:id",dishesController.updateDish);
router.delete("/:id",dishesController.deleteDish);

module.exports=router;