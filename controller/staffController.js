const {Staff} =require("../model/staff")

const staffController={
    addStaff:async(req,res)=>{
        try {
            const newStaff=new Staff(req.body);
            const saveStaff=await newStaff.save();
            res.status(200).json(saveStaff)
        } catch (error) {
            res.status(500).json(error)
        }

    },
    getAllStaff:async (req,res)=>{
        try {
            const allStaff=await Staff.find().populate('bills');
            res.status(200).json(allStaff)
        } catch (error) {
            res.status(500).json(error)

        }
    },
    updateStaff:async(req,res)=>{
        try {
            const staff= await Staff.findById(req.params.id);
            await staff.updateOne({$set:req.body});
            res.status(200).json("update success")
            
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteStaff:async (req,res)=>{
        try {
            await Staff.findByIdAndDelete(req.params.id);
            res.status(200).json("delete success")

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports= staffController