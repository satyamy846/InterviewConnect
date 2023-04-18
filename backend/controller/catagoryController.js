const catagorymodel = require('../models/Catagory');

const catagoryController = {
    async postcatagory(req,res){
        
        try{
                const data = await catagorymodel.create({
                    name:req.body.name,
                    title: req.body.title._id, //add title schema ID
                    questions: req.body.questions._id // add question schema ID
                });
                // console.log(data.title, data.questions);
                res.status(201).json({message:"catagory successfully posted",data:data});

        }
        catch(err){
            console.log(err);
        }
    },
    async getcatagory(req,res){
        const name = req.query.name;
        try{
                const data = await catagorymodel.find({name:name}).populate('title');
                res.status(201).json({data:data});
        }
        catch(err){
            console.log(err);
        }
    },
    async updatecatagory(req,res){
        const id = req.params.id;
        try{
                const newrecord = {
                    tag:req.body.tag,
                    qname: req.body.qname,
                    answer: req.body.answer,
                    photo: req.body.photo,
                }
                const data = await catagorymodel.findByIdAndUpdate(id,newrecord);
                res.status(201).json({data:data});
        }
        catch(err){
            console.log(err);
        }
    },
    async deletecatagory(req,res){
        const id = req.params.id;
        try{
                await catagorymodel.findByIdAndRemove(id);
                res.status(201).json({message:"record is deleted"});
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = catagoryController;