import User from "../models/UserSchema.js"

const verifyLoggedIn = async (req, res) => {
    try{
        if (req.session.email) {
            return res.json({
            isAuthenticated: true,
            email: req.session.email,
            name: req.session.name,
            message: "Logged in Successfully",
            });
        } else {
            return res.status(200).json({ isAuthenticated: false });
        }
    } catch (error) {
            return res.status(400).json({ message: "Failed to validate OAuth account" });
          }
    };

export default {verifyLoggedIn};