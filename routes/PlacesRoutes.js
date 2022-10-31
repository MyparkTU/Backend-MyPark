const express = require('express');
const router = express.Router();

router.get("/", (request, response) => {
    response.json({ message: "Hello This Places Path" });
});

module.exports = router;