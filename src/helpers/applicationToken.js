const jwt = require("jsonwebtoken");

const generarApplicationToken = () => {

    const payload = {
        application: "Financial Transfer API"
    };

    return jwt.sign(
        payload,
        process.env.JWT_TOKEN_SECRET
    );

};

module.exports = {
    generarApplicationToken
};