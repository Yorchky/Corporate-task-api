const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.header("app-token");

    if (!token) {
        return res.status(401).json({
            message: "Application token is required."
        });
    }

    try {

        jwt.verify(
            token,
            process.env.JWT_TOKEN_SECRET
        );

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid application token."
        });

    }

};

module.exports = auth;