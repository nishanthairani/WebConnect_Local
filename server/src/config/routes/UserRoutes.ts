/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import UserController = require("./../../controllers/UserController");

var router = express.Router();
class UserRoutes {
    private _userController: UserController;

    constructor () {
        this._userController = new UserController();
    }
    get routes () {
        var controller = this._userController;

        router.post("/users", controller.create);
        router.post("/authenticate", controller.findOne);
        router.post("/dummy", controller.dummy);

        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;