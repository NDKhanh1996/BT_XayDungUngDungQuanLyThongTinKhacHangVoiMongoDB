import staff from '../schema/staff.model';

export class Controller {
    static async addStaff(req, res) {
        const newStaff = new staff(req.body);
        await newStaff.save();
    }
    static staffList(req, res) {
        return staff.find();
    }
}