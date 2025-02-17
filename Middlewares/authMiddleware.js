import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
    let token = req.header("Authorization");

    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, process.env.CLINT_JWT_SECRET);
        req.user = decoded.Clint_userId;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export default protect;
