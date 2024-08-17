const jwt = require("jsonwebtoken");
const SuperException = require("../core/exceptions/SuperException");

const AuthMiddleware = (req, res, next)=>{
    try {
        
        const token = req.headers.authorization.replace("Bearer", '').trim();
        const key = process.env.jwt_secret_key;
        const data = jwt.verify(token, key)
        req.user_id = data.id

        next()   
    }catch(e){
        return next(new SuperException("Unauthorised request", -1 ,401))
    }
}

module.exports = AuthMiddleware