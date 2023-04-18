const questionmodel = require('../models/Question');

const questionController = {
    async postquestion(req,res){
        
        try{
            const data = await questionmodel.create({
                qname:req.body.qname,
                photo:req.body.photo,
                answer:req.body.answer,
                title: req.title._id,
                catagory: req.catagory._id,
            });
            res.status(201).json({message:"Question successfully posted",data:data});

        }
        catch(err){
            console.log(err);
        }
    },
    async getquestion(req,res){
        try{
                const data = await questionmodel.find({});
                res.status(201).json({data:data});
        }
        catch(err){
            console.log(err);
        }
    },
    async updatequestion(req,res){
        const id = req.params.id;
        try{
                const newrecord = {
                    tag:req.body.tag,
                    qname: req.body.qname,
                    answer: req.body.answer,
                    photo: req.body.photo,
                }
                const data = await questionmodel.findByIdAndUpdate(id,newrecord);
                res.status(201).json({data:data});
        }
        catch(err){
            console.log(err);
        }
    },
    async deletequestion(req,res){
        const id = req.params.id;
        try{
                await questionmodel.findByIdAndRemove(id);
                res.status(201).json({message:"record is deleted"});
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports = questionController;