module.exports = {
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
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    })
  ],
  corePlugins: {
    container: false
  }
}