const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.json({ message: "Hello This Device IoT Path" });
});

module.exports = router;