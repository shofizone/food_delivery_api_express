const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_VALIDITY = "180d";
const JWT_SECRET = process.env.JWT_SECRET || "This is a dummy secret key";

exports.getIdFormAuthorization = (authorization) => {
    // console.log(authorization);
    const {_id} = jwt.decode(authorization.split(" ")[1]);
    // console.log(data);
    return _id;
}

exports.isAccessTokenValid = async  (authorization) => {
    try{
        let re =  await jwt.verify(authorization.split(" ")[1],JWT_SECRET);
        if(re){
            return true
        }
        return  false;
    }catch (e) {
        return false;
    }

}

exports.generateAccessToken = (user) => {
    const {_id, email, name} = user;
    return jwt.sign({_id, email, name}, JWT_SECRET, {
        expiresIn: ACCESS_TOKEN_VALIDITY,
    });
}