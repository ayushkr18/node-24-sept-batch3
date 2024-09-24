const express = require("express");
const studentcontroller = require("../controllers/studentcontroller");
const router = express.Router();
router.use(express.json());

router.get("/students", (req, res) => {
  studentcontroller.getStudent(req, res);
});

router.post("add/student", (req, res) => {
  studentcontroller.addStudent(req, res);
});

module.exports = router;
