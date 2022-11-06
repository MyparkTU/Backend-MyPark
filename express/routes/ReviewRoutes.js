const express = require('express');
const router = express.Router();
const Review = require('../controllers/ReviewController');

router.get("/", (req, res) => {
    res.json({ message: "Hello This Review Path" });
});
//Hello
router.get("/all", Review.findAll);
//Hello
router.post("/create", Review.create);
// for create newPlace to db
router.get("/:id",Review.findById)
module.exports = router;