const express = require('express');
const router = express.Router();

const verifyJWT = require('../validations/verifyJWT');

router.get("/all", verifyJWT,(req, res) => {
    res.json({ message: "Hello This Device IoT Path" });
});


module.exports = router;