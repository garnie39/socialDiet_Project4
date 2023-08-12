import User from "../models/UserSchema.js";

export const verifyLoggedIn = async (request, response) => {
  try {
    if (request.session.email) {
      return response.json({
        isAuthenticated: true,
        email: request.session.email,
        name: request.session.name,
        message: "is verifyLoggedIn ",
      });
    } else {
      return response.status(200).json({ isAuthenticated: false });
    }
  } catch (error) {
    return response
      .status(400)
      .json({ message: "Failed to validate OAuth account" });
  }
};
