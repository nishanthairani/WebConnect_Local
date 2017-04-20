/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import UserBusiness = require("./../app/business/UserBusiness");
import IBaseController = require("./BaseController");
import IUserModel = require("./../app/model/interfaces/UserModel");

class UserController implements IBaseController <UserBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {
            var user: IUserModel = <IUserModel>req.body;
            var userBusiness = new UserBusiness();
            userBusiness.create(user, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    
    findOne(req: express.Request, res: express.Response): void {
        try {
            var name: string = req.params.name;
            var password: string = req.params.password;

            var userBusiness = new UserBusiness();
            console.log(name, password);
            userBusiness.findOne(name, (error, user) => {
                if(error) res.send({"error": "error"});
                if (name === user.username && password === user.password) {
                     res.send(user);
                    // res.send({
                    //     "success": "success",
                    //     body: {
                    //         username: user.username,
                    //         firstName: user.firstName,
                    //         lastName: user.lastName
                    //     }
                    // });
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }

    dummy(req: express.Request, res: express.Response): void {
        try {
            console.log("Hello----------------");
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = UserController;