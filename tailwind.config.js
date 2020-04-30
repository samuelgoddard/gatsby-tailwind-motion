module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'IBM Plex Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    }
  },
  corePlugins: {
    container: false
  }
}