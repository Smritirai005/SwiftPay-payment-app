const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if authorization header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({}); // Forbidden if not provided or incorrectly formatted
    }

    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token using the JWT secret
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach the user ID from the decoded token to the request object
        req.userId = decoded.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        return res.status(403).json({}); // Forbidden if token verification fails
    }
};

module.exports = {
    authMiddleware
};
