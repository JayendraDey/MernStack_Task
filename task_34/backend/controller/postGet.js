import { userModel } from "../database/dataModel.js";




export const submmitData = async (req, res) => {
  try {
    const { name, email, phoneno } = req.body;

    if (!name || !email || !phoneno) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    } else if (phoneno.length != 10) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be 10 digits.",
      });
    } 
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const userData = { name, email, phoneno };
    const dataFromUser = await userModel.create(userData)
    return res.status(200).json({
      success: true,
      message: "Success",
      userdata: dataFromUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};



export const getUserData = async (req, res) => {
  try {
    const data = await userModel.find();

    if (data && data.length > 0) {
      return res.status(200).json({
        success: true,
        userData: data,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
