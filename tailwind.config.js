/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        'padding':{
            '50': '12em',
        },
        'width':{
            '104': '25em',
            '108': '30em',
            '82': '21rem'
        },
        maxWidth: {
            'xxs': '15em',
            'xxxs': '12em',
            'xxxxs': '11em'
        },
        'height':{
            '104': '31.25em',
            '105': '31.8em',
        },
        'colors':{
            'apple-blue': '#06c',
        },
    },
  },
  plugins: [],
}
