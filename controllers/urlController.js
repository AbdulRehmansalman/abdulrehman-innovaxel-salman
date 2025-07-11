const shortid = require("shortid");
const urlSchema = require("../model/schema");

// To Create the Shorten Url
exports.createShortenUrl = async (req, res) => {
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

    res.status(201).json(newDoc);
  } catch (Err) {
    console.log(Err);
  }
};
