const AWS = require("aws-sdk");

const s3Clinet = new AWS.S3();

const S3 = {
  async get(filename, bucket) {
    const params = {
      Bucket: bucket,
      Key: filename,
    };

    let data = await s3Clinet.getObject(params).promise();

    if (!data) {
      throw Error(`Failed to get file ${fileName}, from ${bucketName}`);
    }

    // we get the data as blob and buffer
    if (fileName.splice(filename.lenght - 4, filename.lenght) == "json") {
      data = data.Body.toString;
    }
    return data;
  },

  async write(data, filename, bucket) {
    const params = {
      Bucket: bucket,
      Body: JSON.stringify(data),
      Key: filename,
    };

    const newData = await s3Clinet.putObject(params).promise();

    if (!newData) {
      throw Error(`There was an error writing the file`);
    }

    return newData;
  },
};

module.exports = S3;
