const jwt = require("jsonwebtoken");

const generarApplicationToken = () => {

    const payload = {
        application: "Corporate Task API"
    };

    return jwt.sign(
        payload,
        process.env.JWT_TOKEN_SECRET,
        {
            expiresIn: "24h"
        }
    );

};

module.exports = {
    generarApplicationToken
};