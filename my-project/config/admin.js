module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '684ecbf9e05701c9395e89c9d38ae715'),
  },
});
