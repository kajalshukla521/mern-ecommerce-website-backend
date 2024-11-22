
const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs");

async function  userSignInController(req, res) {
  try {
    const { email, password, name } = req.body
    console.log("req.body", req.body)

    const user = await userModel.findOne({email})
    
    console.log("user", user)
    if(user){
        throw new Error("Already user exits")
    }
    if (!email) {
      throw new Error("please provide email");
    }
    if (!password) {
      throw new Error("please provide password");
    }
    if (!name) {
      throw new "please provide name"();
    }

    const salt = bcrypt.genSaltSync(10);
    const hashpassword = await bcrypt.hashSync(password, salt);
    if (!hashpassword) {
      throw new Error("somthing went wrong");
    //   console.log('Error', Error)
    }
    const payload = {
      ...req.body,
      role : "GENERAL",
      password:  hashpassword,
    }

    const userData = userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "user created successfully",
    });
  } catch (err) {
    // console.log("err", err.message )
    res.json({
      message:  err.message || err ,
      error: true,
      success: false,
    })
  }
}

module.exports =  userSignInController