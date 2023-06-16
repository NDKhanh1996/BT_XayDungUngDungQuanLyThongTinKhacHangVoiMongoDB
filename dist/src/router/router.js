"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const multer_1 = __importDefault(require("multer"));
const all_controller_1 = require("../controller/all.controller");
const upload = (0, multer_1.default)();
router.get('/add', (req, res) => {
    try {
        res.render('addStaff');
    }
    catch (error) {
        res.render('error');
    }
});
router.post('/add', (req, res) => {
    try {
        all_controller_1.Controller.addStaff(req, res);
        res.redirect('/list');
    }
    catch (error) {
        res.render('error');
    }
});
router.get('/list', async (req, res) => {
    try {
        const staffList = await all_controller_1.Controller.staffList(req, res);
        res.render('listStaff', { staffs: staffList });
    }
    catch (error) {
        res.render('error');
    }
});
exports.default = router;
//# sourceMappingURL=router.js.map