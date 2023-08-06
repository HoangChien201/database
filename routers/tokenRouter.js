const tokenController=require('../controller/tokenController')
const router=require('express').Router();

router.get('/',tokenController.getTokenChef)
router.post('/',tokenController.addToken)
router.put('/:id',tokenController.updateToken)
router.delete('/:id',tokenController.deleteToken)

module.exports=router;


