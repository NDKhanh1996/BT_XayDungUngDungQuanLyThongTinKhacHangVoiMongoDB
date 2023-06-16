import { Router } from "express";
const router = Router();
 
import multer from "multer";
import { Controller } from "../controller/all.controller";
const upload = multer();

router.get('/add', (req, res) => {
    try {
        res.render('addStaff')
    } catch (error) {
        res.render('error')
    }
})

router.post('/add', (req, res) => {
    try {
        Controller.addStaff(req, res);
        res.redirect('/list');
    } catch (error) {
        res.render('error');
    }
})

router.get('/list', async (req, res) => {
    try {
        const staffList = await Controller.staffList(req, res);
        res.render('listStaff', { staffs: staffList });
    } catch (error) {
        res.render('error');
    }
})

export default router;