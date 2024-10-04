module.exports = ({ env }) => {
  const comments = {
    gql: {
      auth: false,
    },
  };

  const graphql = {
    endpoint: "/graphql",
    playgroundAlways: true,
  };

  if (env("NODE_ENV") === "production") {
    return {
      comments,
      graphql,
      upload: {
        config: {
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          providerOptions: {
            bucketName: env("BUCKET_NAME"),
            publicFiles: true,
            uniform: true,
            basePath: "",
          },
        },
      },
    };
  } else {
    return { comments, graphql };
  }
};
