module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "cx-task"),
      user: env("DATABASE_USER", "postgres"),
      password: env("DATABASE_PASSWORD", "cx-task"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});
