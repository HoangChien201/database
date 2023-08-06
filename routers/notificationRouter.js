const notificationController=require('../controller/notificationController');
const router=require('express').Router();

router.post('/:token',notificationController.pushNotification)

module.exports=router;