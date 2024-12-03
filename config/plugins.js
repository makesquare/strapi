module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          providerOptions: {
            sizes: {
              thumbnail: { width: 200, height: 200, quality: 75 },
              small: { width: 500, height: 500 },
              medium: { width: 1000, height: 1000 },
              large: { width: 3000, height: 3000 },
            },
          },
        },
        delete: {},
      },
    },
  },
});