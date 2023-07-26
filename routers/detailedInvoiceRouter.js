const {detailedInvoiceController}=require("../controller/detailedInvoiceController");

const router=require('express').Router();

router.get('/',detailedInvoiceController.getAll);
router.post('/',detailedInvoiceController.addDetailedInvoice);
router.put('/:id',detailedInvoiceController.updateDetailedInvoice);
router.delete('/:id',detailedInvoiceController.deleteDetailedInvoice);

module.exports=router;
