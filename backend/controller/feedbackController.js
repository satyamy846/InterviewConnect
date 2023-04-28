const feedbackmodel = require('../models/feedback');

const feedbackController = {
    async postFeedback(req,res){
        try{

            const result = await feedbackmodel.create({
                comment:req.body.comment,
                user:req.params.id,
            });
            res.status(201).json({feedback:result});
        }
        catch(err){
            console.log(err);
        }
    },
    async showfeedback(req,res){
        try{

            const result = await feedbackmodel.find({});
            res.status(201).json({feedback:result});
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = feedbackController;