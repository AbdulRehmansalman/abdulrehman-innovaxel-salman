const shortid = require("shortid");
const urlSchema = require("../model/schema");

// To Create the Shorten Url
exports.createShortenUrl = async (req, res, next) => {
  try {
    // as i have optimized the middleware validation so the url goes to middleware and then we use that from middleware
    const { validatedUrl } = req;
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
      originalurl: validatedUrl,
      shortcode: shortCode,
      created_at: new Date(),
      updated_at: new Date(),
    });
    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (Err) {
    console.error(Err);
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
      return res.status(404).json({ error: "Short Url not FOund" });
    }
    res.status(200).json({
      id: url._id,
      originalurl: url.originalurl,
      shortcode: url.shortCode,
      created_at: url.created_at,
      updated_at_at: url.updated_at,
      accessCount: url.accessCount,
    });
  } catch (Err) {
    console.log(Err);
  }
};

exports.updateShortUrl = async (req, res, next) => {
  try {
    const { shortCode } = req.params;
    const { validatedUrl } = req;
    const updatedUrl = await urlSchema.findOneAndUpdate(
      { shortcode: shortCode },
      { originalurl: validatedUrl, updated_at: new Date() },
      { new: true }
    );
    // console.log("th eUPdaetd Url is", updatedUrl); testing the updatedUrl has come or not

    if (!updatedUrl) {
      res.status(404).json({ error: "Short url not Found" });
    }
    res.status(200).json(updatedUrl);
  } catch (Err) {
    console.log(Err);
  }
};

exports.deleteShortUrl = async (req, res) => {
  const { shortCode } = req.params;
  const deleteUrl = await urlSchema.findOneAndDelete({ shortcode: shortCode });

  if (!deleteUrl) {
    return res.status(404).json({ error: "not Found short Url" });
  }
  res.status(204).send();
};

exports.getShortUrlStats = async (req, res) => {
  const { shortCode } = req.params;
  const statsUrl = await urlSchema.findOne({ shortcode: shortCode });

  if (!statsUrl) {
    return res.status(404).json({ error: "not Found short Url" });
  }
  res.status(200).json(statsUrl);
};
