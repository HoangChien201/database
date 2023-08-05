const { TypeOfDish } = require('../model/typeOfDish');
const { Dishes } = require('../model/dishes')

const typeOfDishController = {
    //get
    getAllTypeOfDish: async (req, res) => {
        try {
            const allType = await TypeOfDish.find().populate('dishes');
            res.status(200).json(allType);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getType:async(req,res)=>{
        try {
            const allType = await TypeOfDish.find();
            res.status(200).json(allType);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    ,
    getATypeOfDish: async (req, res) => {
        try {
            const type = await TypeOfDish.findById(req.params.id).populate('dishes');
            res.status(200).json(type);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllDishesInType:async (req, res) => {
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
    ,
    //add
    addTypeOfDish: async (req, res) => {
        try {
            const newType = new TypeOfDish(req.body)
            const saveType = await newType.save();
            res.status(200).json(saveType);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //update
    updateTypeOfDish: async (req, res) => {
        try {
            const type = await TypeOfDish.findById(req.params.id);
            await type.updateOne({ $set: req.body });
            res.status(200).json("update successfully");
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //delete
    deleteTypeOfDish: async (req, res) => {
        try {
            await TypeOfDish.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully");
        } catch (error) {
            res.status(500).json(error)
        }
    },

}

module.exports = typeOfDishController;