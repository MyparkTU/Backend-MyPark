const express = require('express');
const router = express.Router();
const Report = require('../controllers/ReportController');

router.get("/", (req, res) => {
    res.json({ message: "Hello This Report Path" });
});

router.get("/all", Report.findAll);

router.post("/create", Report.create);

//

// for create newPlace to db
router.post("/:id", Report.findByid);

// get all data
router.put("/:id", Report.update);

module.exports = router;