const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Hello This Report Path" });
});

module.exports = router;