import User from "../models/UserSchema.js";

export const verifyLoggedIn = async (req, res) => {
    try{
        if (req.session.email) {
            return res.json({
            isAuthenticated: true,
            email: req.session.email,
            name: req.session.name,
            _id: req.session.user._id,
            message: "User is logged in",
            });
        } else {
            return res.status(200).json({ isAuthenticated: false });
        }
    } catch (error) {
            return res.status(400).json({ message: "Failed to validate  account" });
          }
    };
