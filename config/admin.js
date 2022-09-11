module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    events: {
      onConnectionSuccess(e) {
        console.log(e.provider);
      },

      onConnectionError(e) {
        console.error(e.error, e.provider);
      },
    },
  },
  options: {
    expiresIn: '7d',
  },
});

