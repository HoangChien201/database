const { Bill } = require('../model/bill');
const { Table } = require('../model/table');

const tableController = {
    getAllTable: async (req, res) => {
        try {
            const allTable = await Table.find();
            res.status(200).json(allTable);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addTable: async (req, res) => {
        try {
            const newTable = new Table(req.body);
            const saveTable = await newTable.save();

            res.status(200).json(saveTable);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateTable: async (req, res) => {
        try {
            const table = Table.findById(req.params.id);
            await table.updateOne({ $set: req.body })
            res.status(200).json("update successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteTable:async (req,res)=>{
        try {
            await Table.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully");

        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = tableController;