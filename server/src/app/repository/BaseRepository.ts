/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IRead = require("./interfaces/Read");
import IWrite = require("./interfaces/Write");
import IUserModel = require("./../model/interfaces/UserModel");

import mongoose = require("mongoose");

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);

    }

    findOne (username: string, callback: (error: any, result: T) => void) {
        this._model.findOne( username, callback);
    }

    private toObjectId (_id: string) : mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}

export = RepositoryBase;