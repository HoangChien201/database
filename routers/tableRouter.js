const tableController=require('../controller/tableController');
const router=require('express').Router();

router.get('/',tableController.getAllTable);
router.post('/',tableController.addTable);
router.put('/:id',tableController.updateTable);
router.delete('/:id',tableController.deleteTable);

module.exports=router;
