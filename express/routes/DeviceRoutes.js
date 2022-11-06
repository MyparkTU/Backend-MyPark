const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    response.json({ message: "Hello This Device IoT Path" });
});

module.exports = router;