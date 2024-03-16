const express = require('express');

const studentModel = require('../Model/studentModel');
const router = express.Router();
const mongodb = require("mongodb")
router.use(express.json());

router.get('/',async(req,res)=>{
try{
    const data = await studentModel.find()
    res.send(data);
} catch (error){
    console.log(error)
}
})

router.post('/add',async(req,res)=>{
    try{
        var item = req.body;
        await studentModel(item).save();
        res.send("data added");
    }catch(error){
         console.log(error)
    }
})


router.put('/edit/:id',async(req,res)=>{
    try{
        let id = req.params.id;
         await studentModel.deleteOne({_id:new mongodb.Object(id)});
        res.send("data delected")
    }catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        await studentModel.findByIdAndDelete(id);
        res.send("item delected")
    }catch (error) {
        console.log(error)
    }
})

module.exports = router;