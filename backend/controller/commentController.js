const commentmodel = require('../models/Comment');

const commentController = {
    async postComment(req,res){
        try{

            const result = await commentmodel.create(req.body);
            res.status(201).json({comment:result});
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = commentController;