const { DetailedInvoice } = require('../model/detailedInvoice');
const { Bill } = require('../model/bill');
const { Dishes } = require('../model/dishes');

const detailedInvoiceController = {
    getUnprocessed:async(req,res)=>{
        const receivedDetail=await DetailedInvoice.find({status:"received"});
        const doneDetail=await DetailedInvoice.find({status:"booked"});
        const unprocessedDetail=[...receivedDetail,...doneDetail]
        const dishes= await Dishes.find();
        res.status(200).json({unprocessedDetail,dishes});

    },
    getAllOfBill: async (req, res) => {
        try {
            const allDetailedInvoice = await DetailedInvoice.find({bill:req.params.id});
            res.status(200).json(allDetailedInvoice);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    
    addDetailedInvoice: async (req, res) => {
        try {
            const newDI = await new DetailedInvoice(req.body);
            const saveDI = await newDI.save();

            if (req.body.bill) {
                const bill = await Bill.findById(req.body.bill)
                await bill.updateOne({ $push: { detailedInvoice: newDI._id } });
            }

            res.status(200).json(saveDI);

        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateDetailedInvoice: async (req, res) => {
        try {
            const detailedInvoice=await DetailedInvoice.findById(req.params.id);
            await detailedInvoice.updateOne({$set:req.body})
            res.status(200).json("update successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteDetailedInvoice: async (req, res) => {
        try {
            await Bill.updateMany(
                { detailedInvoice: req.params.id },
                { $pull: { detailedInvoice: req.params.id } }
            )
            await DetailedInvoice.findByIdAndDelete(req.params.id);
            res.status(200).json("detele successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = { detailedInvoiceController }