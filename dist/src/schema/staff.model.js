"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staff = void 0;
const mongoose_1 = require("mongoose");
const staffSchema = new mongoose_1.Schema({
    name: String,
    age: String
});
exports.staff = (0, mongoose_1.model)('Staff', staffSchema);
exports.default = exports.staff;
//# sourceMappingURL=staff.model.js.map