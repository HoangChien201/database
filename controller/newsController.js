const { News } = require("../model/news");

const newsController = {
    getAllNews: async (req, res) => {
        try {
            const listNews= await News.find();
            res.status(200).json(listNews)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getANews: async (req,res)=>{
        try {
            const news= await News.findById(req.params.id);
            res.status(200).json(news)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addNews: async (req, res) => {
        try {
            const newArticle=new News(req.body)
            const saveArticle=await newArticle.save()
            res.status(200).json(saveArticle);
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