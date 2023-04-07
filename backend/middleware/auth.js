const jwt = require('jsonwebtoken');

const auth = {
    async authenticate(req,res,next){
        try{
            let token = req.headers.authorization;
            if(token){
                //send that token for authorization
                const user = jwt.verify(token,SECRET_KEY);
                req.userId = user.id;
            }
            else{
                return res.status(404).json({message:`Unauthorised user`});
            }
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = auth;