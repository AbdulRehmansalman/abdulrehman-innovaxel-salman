const express = require("express");
const urlController = require("../controllers/urlController");
const validatationUrl = require("../middleware/validatorUrl");

const router = express.Router();

router.post("/", validatationUrl, urlController.createShortenUrl);

module.exports = router;
