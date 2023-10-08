const { Dishes } = require('../model/dishes');
const { News } = require('../model/news');
const { TypeOfDish } = require('../model/typeOfDish');

const dishesController = {
    getAllDishes: async (req, res) => {
        try {
            const allDishes = await Dishes.find();
            res.status(200).json(allDishes);

        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllArticle:async (req, res) => {
        try {
            const allDishes = await News.find();
            res.status(200).json(allDishes);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    addDish: async (req, res) => {
        try {
            const newDish = new Dishes(req.body);
            const saveDish = await newDish.save();
            if (req.body.typeOfDish) {
                const type = await TypeOfDish.findById(req.body.typeOfDish);
                await type.updateOne({ $push: { dishes: saveDish._id } });
            }
            res.status(200).json(saveDish);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateDish: async (req, res) => {
        try {
            const dish = await Dishes.findById(req.params.id);
            await dish.updateOne({ $set: req.body })

            res.status(200).json("update successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteDish: async (req, res) => {
        try {
            await Dishes.updateMany(
                { dishes: req.params.id },
                { $pull: { dishes: req.params.id } }
            );
            await Dishes.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

}

module.exports = dishesController;