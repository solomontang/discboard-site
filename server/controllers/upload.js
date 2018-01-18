const utils = require('../lib/s3Utils');

module.exports.getSigned = (req, res) => {
  const {filename, filetype} = req.query;
  let signedUrl = utils.sign(filename, filetype);
  res.status(200).send({signedUrl});
}
