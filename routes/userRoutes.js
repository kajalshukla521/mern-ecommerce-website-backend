
const express = require('express');
const router = express.Router();
const userSignUpController = require("../controllers/userSignUp")
const userSignInController = require("../controllers/userSignIn")
const userDetailsController = require('../controllers/userDetails')
const authToken = require('../middleware/authToken');
const userLogout = require ("../controllers/userLogout");
const allUsers = require('../controllers/allUsers');
const updataUser = require("../controllers/updateUser");
const UploadProductController = require('../controllers/uploadProduct');
const getProductController = require('../controllers/getProduct');



// Define routes
router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken, userDetailsController )
router.get("/userLogout",userLogout)


//admin panel routes
router.get("/all-user",authToken, allUsers)
router.post("/update-user", authToken, updataUser)


//product routes
router.post("/upload-product",authToken,  UploadProductController)
router.get ("/get-product", getProductController)


module.exports = router

