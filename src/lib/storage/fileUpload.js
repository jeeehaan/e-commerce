import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "OC9CK7TDW1QROLQBK06Q",
  secretAccessKey: "jTYHiQfnKpttonbrIFPguimHh2hLgdYuk9ZQWV2Z",
  region: "ap-southeast-1",
});

const S3 = new AWS.S3({
  endpoint: "https://s3.ap-southeast-1.wasabisys.com",
});

export const fileUpload = (file, folder) => {
  const S3Params = {
    Bucket: "ecommerce-project",
    Key: `${folder}/${file.name}`,
    Body: file,
  };
  return new Promise((resolve, reject) => {
    S3.upload(S3Params, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
