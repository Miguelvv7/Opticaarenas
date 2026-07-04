/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pri: '#002045', 'pri-c': '#1a365d', 'on-pri': '#ffffff', 'on-pri-c': '#adc7f7',
        sec: '#0061a5', 'sec-c': '#d2e4ff', 'on-sec': '#ffffff', 'on-sec-c': '#003258',
        surf: '#f9f9ff', 'surf-dim': '#cfdaf1', 'surf-lo': '#f0f3ff', 'surf-hi': '#dee8ff',
        'surf-xhi': '#d8e3fa', 'surf-0': '#ffffff', 'on-surf': '#111c2c', 'on-surf-v': '#43474e',
        bg: '#f9f9ff', outline: '#74777f', 'outline-v': '#c4c6cf',
        'inv-surf': '#263142', 'inv-pri': '#adc7f7', 'inv-on': '#ebf1ff',
        err: '#ba1a1a', 'on-err': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1200px' },
      boxShadow: {
        card: '0 2px 12px rgba(0,32,69,.07),0 0 0 1px rgba(0,32,69,.04)',
        'card-h': '0 8px 32px rgba(0,32,69,.14),0 0 0 1px rgba(0,32,69,.06)',
        nav: '0 2px 16px rgba(0,32,69,.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
