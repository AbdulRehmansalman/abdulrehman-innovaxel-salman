const validator = require("validator");

module.exports = (req, res, next) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "Missing URLl" });
  }
  if (!validator.isURL(url)) {
    return res.status(400).json({ error: "INvalid Url  " });
  }
  next();
};
