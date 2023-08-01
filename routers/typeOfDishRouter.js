const typeOfDishController=require('../controller/typeOfDishController');
const router=require('express').Router();

router.get("/dataDishes",typeOfDishController.getAllDishesInType);
router.get("/",typeOfDishController.getAllTypeOfDish);
router.get("/:id",typeOfDishController.getATypeOfDish);



router.post("/",typeOfDishController.addTypeOfDish);

router.put("/:id",typeOfDishController.updateTypeOfDish);

router.delete("/:id",typeOfDishController.deleteTypeOfDish);

module.exports=router;

