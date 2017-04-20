/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
interface ReadController {
    findOne: express.RequestHandler;
}
export = ReadController;