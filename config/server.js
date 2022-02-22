module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'WWZoaC5fmaZX3SS25sbwRO9n4nRXutIfu8bkkqud8Bx2ZRBKw6pryjrimoPo9TOcaUszxTeqCxXnQomtek7c0A=='),
    },
  },
});
