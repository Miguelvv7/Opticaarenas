/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/js/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pri: '#2C6E7F', 'pri-c': '#357A8C', 'on-pri': '#ffffff', 'on-pri-c': '#EAF9FC',
        sec: '#4A9DB0', 'sec-c': '#E6F4F7', 'on-sec': '#ffffff', 'on-sec-c': '#2C6E7F',
        surf: '#F7FBFC', 'surf-dim': '#CFE6EA', 'surf-lo': '#EFF8F9', 'surf-hi': '#DCEEF1',
        'surf-xhi': '#D3E9ED', 'surf-0': '#ffffff', 'on-surf': '#122A2E', 'on-surf-v': '#445357',
        bg: '#F7FBFC', outline: '#74898C', 'outline-v': '#C3D6D9',
        'inv-surf': '#1D3A40', 'inv-pri': '#EAF9FC', 'inv-on': '#EAFBFD',
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
