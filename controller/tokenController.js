const { Staff } = require("../model/staff");
const Token = require("../model/token")

const tokenController={
    getTokenChef:async(req,res)=>{
        try {
            const tokens=await Token.find();
            // const staffs=await Staff.find({position:"chef"});
            // tokens.filter((token)=>{
            //     const checkStaff=false;
            //     staffs.forEach(staff=>{
            //         if(token.idStaff===staff._id){
            //             checkStaff=true;
            //         }
            //     })
            //     return token;
            // })
            res.status(200).json(tokens)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addToken:async(req,res)=>{
        try {
            const tokenNew=new Token(req.body);
            const tokenSave=await tokenNew.save();
            res.status(200).json(tokenSave)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateToken:async(req,res)=>{
        try {
            const token=await Token.findById(req.params.id)
            await token.update({$set:req.body})
            req.status(200).json("update successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteToken:async(req,res)=>{
        try {
            await Token.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports=tokenController;