module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '01f9e01fa53de1739dad027d519854e4'),
  },
});
