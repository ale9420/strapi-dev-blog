module.exports = ({ env }) => {
  const comments = {
    gql: {
      auth: false,
    },
  };

  if (env("NODE_ENV") === "production") {
    return {
      comments,
      upload: {
        config: {
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          providerOptions: {
            bucketName: env("BUCKET_NAME"),
            publicFiles: true,
            uniform: false,
            basePath: "",
          },
        },
      },
    };
  } else {
    return { comments };
  }
};
