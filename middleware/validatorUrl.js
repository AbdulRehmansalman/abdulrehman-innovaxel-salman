const validator = require("validator");

module.exports = (req, res, next) => {
  const { url } = req.body;

  // Enhance the validation of Url by checking the as it is found or not in request body:
  if (!url) {
    return res.status(400).json({ error: "url required" });
  }

  // and check its datatype as String
  if (typeof url !== "string") {
    return res.status(400).json({ error: "url is in strings" });
  }

  // check the empty string if any :
  const trimUrl = url.trim();
  if (!trimUrl) {
    return res.status(400).json({ error: "It cannot be Empty" });
  }

  // then check that the Url is valid as it as secure protocols
  if (
    !validator.isURL(trimUrl, {
      protocols: ["http", "https"],
      require_protocol: true,
      require_valid_protocol: true,
    })
  ) {
    return res
      .status(400)
      .json({ error: "it is invalid and has http or https" });
  }
  req.validatedUrl = trimUrl;
  next();
};
