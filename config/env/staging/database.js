module.exports = ({ env }) => {
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: env("DATABASE_FILENAME", "../../../.tmp/data.db"),
      },
      useNullAsDefault: true,
      debug: false,
    },
  };
};
