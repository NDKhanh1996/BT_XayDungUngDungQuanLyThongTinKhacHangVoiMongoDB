"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const staff_model_1 = __importDefault(require("../schema/staff.model"));
class Controller {
    static async addStaff(req, res) {
        const newStaff = new staff_model_1.default(req.body);
        await newStaff.save();
    }
    static staffList(req, res) {
        return staff_model_1.default.find();
    }
}
exports.Controller = Controller;
//# sourceMappingURL=all.controller.js.map