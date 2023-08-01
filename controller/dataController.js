const { Bill } = require("../model/bill");
const { DetailedInvoice } = require("../model/detailedInvoice");
const { Staff } = require("../model/staff");
const { Table } = require("../model/table");
const { Dishes } = require("../model/dishes");
const { TypeOfDish } = require("../model/typeOfDish");



const dataController = {
    DataABill: async (req, res) => {
        try {
            const billFind = await Bill.findById(req.params.id);
            const detailedInvoices = await DetailedInvoice.find({ bill: billFind._id });
            const staff = await Staff.findById(billFind.staff);
            const table = await Table.findById(billFind.table);
            const dishes= await Dishes.find()
            res.status(200).json({billFind,detailedInvoices,staff,table,dishes});

        } catch (error) {
            res.status(500).json(error);
        }

    },
    DataBills: async (req, res) => {
        try {
            const billFind = await Bill.find().populate('table').populate('staff');
            // const table = await Table.findById(billFind.table);
            // const staff= await Staff.findById(billFind.staff)
            res.status(200).json({billFind});

        } catch (error) {
            res.status(500).json(error);
        }

    },
    DataDishes: async (req, res) => {
        try {
            const data={}
            const typeOfDish=await TypeOfDish.find()
            const dishes= await Dishes.find()
            typeOfDish.forEach((type)=>{
                data[type.name]=dishes.filter((dish)=>{
                    
                    return dish.typeOfDish.toString()===type._id.toString();
                })
            })
            res.status(200).json(data);

        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = dataController;