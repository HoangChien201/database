const { GetMonth,FormatDate,FormatMonth }=require('../format/date');

const { Bill } = require('../model/bill');
const { Dishes } = require('../model/dishes');
const { Staff } = require('../model/staff');
const { Table } = require('../model/table');

const billController = {
    addBill: async (req, res) => {
        try {
            const newBill = new Bill(req.body);
            const saveBill = await newBill.save();
            if (req.body.staff) {
                const staff = Staff.findById(req.body.staff);
                await staff.updateOne({ $push: { bills: saveBill._id } });

                
            }
            if(req.body.table){
                const table = Table.findById(req.body.table);
                await table.updateOne({ $push: { bills: saveBill._id } });
            }
            
            res.status(200).json(saveBill)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getAllBill: async (req, res) => {
        try {
            const allBill = await Bill.find().populate('table').populate('staff');
            res.status(200).json(allBill)
        } catch (error) {
            res.status(500).json(error)

        }
    },
    getABillStatusFalse: async (req, res) => {
        try {
            const bill = await Bill.findOne({status:false,table:req.params.id}).populate("detailedInvoice").populate('table').populate('staff');
            const dishes= await Dishes.find();

            res.status(200).json({bill,dishes})
        } catch (error) {
            res.status(500).json(error)

        }
    },
    getABill: async (req, res) => {
        try {
            const bill = await Bill.findById(req.params.id);

            res.status(200).json(bill)
        } catch (error) {
            res.status(500).json(error)

        }
    },

    updateBill: async (req, res) => {
        try {
            const bill = Bill.findById(req.params.id);
            await bill.updateOne({ $set: req.body })
            res.status(200).json("update successfully")
        } catch (error) {
            res.status(500).json(error);
        }
        
    },
    updateDetailInvoideOfBill: async (req, res) => {
        try {
            const bill=await Bill.findById(req.params.id);
            const detailedInvoiceOld=bill.detailedInvoice;
            await Bill.updateOne({_id:req.params.id},{$set:{detailedInvoice:[...detailedInvoiceOld,...req.body["detailedInvoice"]]}})
            res.status(200).json("update successfully")
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteBill: async (req, res) => {
        try {
            await Staff.updateMany(
                { bills: req.params.id },
                { $pull: {bills: req.params.id} }
            );
            await Table.updateMany(
                { bills: req.params.id },
                { $pull: {bills: req.params.id} }
            );
            await Bill.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully")
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBillOfMonth:async(req,res)=>{
        try {
            const dateSearch=FormatMonth(req.params.date)
            const bills=Bill.find();
            const billsSearch=(await bills).filter(bill=>{
                const billDate=bill.billDate;
                const billDateFormat=FormatDate(billDate.substring(billDate.indexOf(" ")+1))
                if(billDateFormat.includes(dateSearch)===true){
                    return bill;
                }
            })
            res.status(200).json(billsSearch)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getBillOfDay:async(req,res)=>{
        try {
            const dateSearch=FormatDate(req.params.date)
            const bills=Bill.find();
            const billsSearch=(await bills).filter(bill=>{
                const billDate=bill.billDate;
                const billDateFormat=FormatDate(billDate.substring(billDate.indexOf(" ")+1))
                if(dateSearch.includes(billDateFormat)===true){
                    return bill;
                }
            })
            res.status(200).json(billsSearch)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = billController;
