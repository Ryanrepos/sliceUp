import express from "express";

const routerAdmin = express.Router();

import restaurantController from "./controller/restaurant.controller";

// ** RESTAURANT **

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin)

routerAdmin
    .get("/Signup", restaurantController.getSingup)
    .post("/Signup", restaurantController.processSignup);

// ** PRODUCT **

// ** USER **

export default routerAdmin;