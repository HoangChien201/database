const { News } = require('../model/news');

const newsController = {
    getAllNews: async (req, res) => {
        try {
            const listNews=News.find();
            res.status(200).json(listNews)

        } catch (error) {
            res.status(500).json(error);
        }
    },
    addNews: async (req, res) => {
        try {
            const newNews=new News(req.body)
            const saveNews=await newNews.save()
            res.status(200).json(saveNews);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteNews: async (req, res) => {
        try {
            await News.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

}

module.exports = newsController;