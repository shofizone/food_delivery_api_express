const jwt = require("jsonwebtoken");

exports.getIdFormAuthorization=(authorization)=>{
    // console.log(authorization);
    const {_id} = jwt.decode(authorization.split(" ")[1]);
    // console.log(data);
    return _id;
}