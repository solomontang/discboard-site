const utils = require('../lib/s3Utils');

module.exports.getSigned = (req, res) => {
  
  let signedUrl = utils.sign(req.query);
  res.status(200).send({signedUrl});
}
