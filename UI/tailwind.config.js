module.exports = {
    purge: {
      content: ['./src/**/*.html'],
      safelist: [
        'bg-blue-500',
        'text-center',
        'hover:opacity-100',
        // ...
        'lg:text-right',
      ]
    },
    // ...
  }