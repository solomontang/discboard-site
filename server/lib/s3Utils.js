const aws = require('aws-sdk');
const config = require('config')['s3'];

aws.config.update({
  accessKeyId: config.AWS_ACCESS_KEY,
  secretAccessKey: config.AWS_SECRET_KEY,
  region: 'us-west-1'
});

exports = module.exports = {
  sign: function(filename, filetype) {
    var s3 = new aws.S3();

    var params = {
      Bucket: config.BUCKET_URL,
      Key: filename,
      Expires: 60,
      ContentType: filetype,
      ACL: 'public-read'
    };

    return s3.getSignedUrl('putObject', params);
  }
};