import express from "express";

const routerAdmin = express.Router();

import restaurantController from "./controller/restaurant.controller";
import productController from "./controller/product.controller";
import makeUploader from "./libs/utilis/uploader";

// ** RESTAURANT **

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin)

routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", makeUploader("members").single("memberImage"),
        restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);


routerAdmin.get("/check-me", restaurantController.checkAuthSession);


// ** PRODUCT **

routerAdmin.get("/product/all", restaurantController.verifyRestaurant,
    productController.getAllProducts);

routerAdmin.post("/product/create", restaurantController.verifyRestaurant, makeUploader("products").array("productImages", 5), productController.createNewProduct);

routerAdmin.post("/product/:id", restaurantController.verifyRestaurant, productController.updateChosenProduct);

// ** USER **

export default routerAdmin;