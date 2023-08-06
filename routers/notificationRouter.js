const notificationController=require('../controller/notificationController');
const router=require('express').Router();

router.get('/notification',notificationController.pushNotification)

module.exports=router;