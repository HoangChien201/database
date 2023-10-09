const newsController=require('../controller/newsController')
const router=require('express').Router();

router.get("/",newsController.getAllNews);
router.get("/:id",newsController.getANews);
router.get("/search/:key",newsController.searchNews);


router.post("/",newsController.addNews);
router.delete("/:id",newsController.deleteNews);

module.exports=router;