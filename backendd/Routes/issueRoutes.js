
const express=require('express');
const router=express.Router();
const Issue=require('../models/Issue');
router.post('/',async(req,res)=>{
    try{
        const newIssue=new Issue({
            title:req.body.title,
            owner:req.body.owner,
            dueDate:req.body.dueDate,
            createdDate:req.body.createdDate
        });
        const savedIssue=await newIssue.save();
        res.status(201).json(savedIssue);
    }catch(err){res.status(400).json({message:"Failed to save data"});
    }
});
router.get('/',async(req,res)=>{
    try{
    const data=await Issue.find();
    res.json(data);
    }
    catch(error){
        res.status(500).json({message:"Failed to retreive data"});
    }
});
router.patch('/:id', async (req, res) => {

    try {

        const updating = await Issue.findByIdAndUpdate(

            req.params.id,
            req.body,
            { new: true }

        );

        res.json(updating);

    } catch (err) {
        console.log(err);

        res.status(400).json({
            message: err.message
        });

    }

});
router.delete('/:id',async(req,res)=>{
    try{
        await Issue.findByIdAndDelete(req.params.id);
        res.json({message:'Issue is Deleted'});

    } catch(err){
        res.status(400).json({error:err.message});
    }
});
module.exports=router;


