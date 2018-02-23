const aws = require('aws-sdk');
const config = require('config')['s3'];

aws.config.update({
  accessKeyId: config.AWS_ACCESS_KEY,
  secretAccessKey: config.AWS_SECRET_KEY,
  region: 'us-west-1'
});

exports = module.exports = {
  sign: function({filename, filetype, guild}) {
    var s3 = new aws.S3();

    var params = {
      Bucket: config.BUCKET_URL,
      Key: guild + '/' + filename,
      Expires: 600,
      ContentType: filetype,
      ACL: 'public-read'
    };

    return s3.getSignedUrl('putObject', params);
  }
};