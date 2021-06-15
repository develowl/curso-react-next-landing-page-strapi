module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  netlifyWebhook: env('NETLIFY_WEBHOOK')
});