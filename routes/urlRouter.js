const express = require("express");
const urlController = require("../controllers/urlController");
const validatationUrl = require("../middleware/validatorUrl");

const router = express.Router();

router.post("/", validatationUrl, urlController.createShortenUrl);
router.get("/:shortCode", urlController.getOriginalUrl);
router.put("/:shortCode", validatationUrl, urlController.updateShortUrl);
router.delete("/:shortCode", urlController.deleteShortUrl);

module.exports = router;
