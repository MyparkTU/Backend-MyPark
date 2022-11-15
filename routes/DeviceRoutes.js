const { response } = require('express');
const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/DeviceController');
const verifyJWT = require('../validations/verifyJWT');

router.get("/all", verifyJWT,DeviceController.readall);

router.get("/:id",  verifyJWT,DeviceController.findByid);

module.exports = router;