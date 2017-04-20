/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */


import mongoose = require("mongoose");
interface Write<T> {
    create: (item:T, callback: (error: any, result: any ) => void) => void;
}

export = Write;