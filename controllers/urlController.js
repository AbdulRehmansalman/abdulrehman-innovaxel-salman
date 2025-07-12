const shortid = require("shortid");
const urlSchema = require("../model/schema");

// To Create the Shorten Url
exports.createShortenUrl = async (req, res, next) => {
  try {
    const { url } = req.body;
    let shortCode;

    while (true) {
      const genCode = shortid.generate().slice(0, 6);
      const exists = await urlSchema.findOne({ shortcode: genCode });
      if (!exists) {
        shortCode = genCode;
        break;
      }
    }
    const newDoc = new urlSchema({
      originalurl: url,
      shortcode: shortCode,
      created_at: new Date(),
      updated_at: new Date(),
    });
    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (Err) {
    console.log(Err);
  }
};

exports.getOriginalUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const url = await urlSchema.findOneAndUpdate(
      { shortcode: shortCode },
      { $inc: { accessCount: 1 } },
      { new: true }
    );
    console.log(url);

    if (!url) {
      return res.status(400).json({ error: "Url not FOund" });
    }
    res.status(200).json({ originalurl: url.originalurl });
  } catch (Err) {
    console.log(Err);
  }
};

exports.updateShortUrl = async (req, res, next) => {
  try {
    const { shortCode } = req.params;
    const { url } = req.body;
    const updatedUrl = await urlSchema.findOneAndUpdate(
      { shortcode: shortCode },
      { originalurl: url, updated_at: new Date() },
      { new: true }
    );
    // console.log("th eUPdaetd Url is", updatedUrl); testing the updatedUrl has come or not

    if (!updatedUrl) {
      res.status(400).json({ error: "url not Found" });
    }
    res.status(200).json(updatedUrl);
  } catch (Err) {
    console.log(Err);
  }
};
