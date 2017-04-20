/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import UserRepository = require("./../repository/UserRepository");
import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("./../model/interfaces/UserModel");
import UserModel = require("./../model/UserModel");


class UserBusiness implements IUserBusiness {
    private _userRepository: UserRepository;

    constructor () {
        this._userRepository = new UserRepository();
    }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.create(item, callback);
    }

    findOne (username: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.findOne(username, callback);
    }

}


Object.seal(UserBusiness);
export = UserBusiness;