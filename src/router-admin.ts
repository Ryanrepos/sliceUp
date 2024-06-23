import express from "express";

const routerAdmin = express.Router();

import restaurantController from "./controller/restaurant.controller";
import productController from "./controller/product.controller";

// ** RESTAURANT **

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin)

routerAdmin
    .get("/Signup", restaurantController.getSingup)
    .post("/Signup", restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);


routerAdmin.get("/check-me", restaurantController.checkAuthSession);


// ** PRODUCT **

routerAdmin.get("/product/all", productController.getAllProducts);

routerAdmin.post("/product/create", productController.createNewProduct);

routerAdmin.post("/product/:id", productController.updateChosenProduct);

// ** USER **

export default routerAdmin;