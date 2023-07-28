const {detailedInvoiceController}=require("../controller/detailedInvoiceController");

const router=require('express').Router();

router.get('/unprocessed',detailedInvoiceController.getUnprocessed);
router.get('/:id',detailedInvoiceController.getAllOfBill);
router.post('/',detailedInvoiceController.addDetailedInvoice);
router.put('/:id',detailedInvoiceController.updateDetailedInvoice);
router.delete('/:id',detailedInvoiceController.deleteDetailedInvoice);

module.exports=router;
