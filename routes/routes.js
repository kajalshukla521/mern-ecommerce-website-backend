
const express = require('express');
const router = express.Router();

//users cotrollers


const userSignUpController = require("../controllers/users/userSignUp")
const userSignInController = require("../controllers/users/userSignIn")
const userDetailsController = require('../controllers/users/userDetails')
const authToken = require('../middleware/authToken');
const userLogout = require ("../controllers/users/userLogout");
const allUsers = require('../controllers/users/allUsers');
const updataUser = require("../controllers/users/updateUser");



//product controllers
const UploadProductController = require('../controllers/product/uploadProduct');
const getProductController = require('../controllers/product/getProduct');
const updateProductController = require('../controllers/product/updateProduct');
const getCategoryProduct = require('../controllers/product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controllers/product/getCategoryWiseProduct');
const getProductDetails = require('../controllers/product/getProductDetails');
const addToCartController = require('../controllers/users/addToCartController');
const countAddToCartProduct = require('../controllers/users/countAddToCartProduct');
const addToCartViewProduct = require('../controllers/users/addToCartViewProduct');
const searchProduct = require('../controllers/product/searchProduct');
const filterProductController = require('../controllers/product/filterProduct');
const updateAddToCartProduct = require('../controllers/users/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controllers/users/deleteAddToCartProduct');



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
router.post ("/update-product",authToken, updateProductController)
router.get("/get-category-product", getCategoryProduct)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)

router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)


// user addtocart routes
router.post("/addtocart",authToken, addToCartController)
router.get("/countAddToCartProduct",authToken, countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)



module.exports = router

