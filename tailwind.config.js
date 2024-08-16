/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: {
    enable: 'true',
  },
  theme: {
    screens: {
      sm: '340px',
      md: '620px',
      lg: '960px',
      xl: '1216px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: 'Rubik',
      },
      colors: {
        'primary-normal': '#1b69d2',
        'primary-dark': '#1357B3',
        'primary-light': '#5390E3',

        'secondary-normal': '#1B69D2',
        'secondary-dark': '#1357B3',
        'secondary-light': '#5390E3',

        'black-normal': '#0F141F',
        'black-dark': '#06090F',
        'black-light': '#151B26',
        'black-darken': '#0F141F',

        'white-normal': '#E8EBF0',
        'white-dark': '#D8DBE3',
        'white-light': '#F7F9FC',

        'gray-1': '#131414',
        'gray-2': '#2B2B2C',
        'gray-3': '#424344',
        'gray-4': '#595A5C',
        'gray-5': '#717274',
        'gray-6': '#888A8C',
        'gray-7': '#9EA0A3',

        'red-normal': '#F03D3D',
        'red-dark': '#d03333',
        'red-light': '#f05454',

        'green-normal': '#0BB07B',
        'green-dark': '#28bb49',
        'green-light': '#50e170',

        'yellow-normal': '#FFCE52',
        'yellow-dark': '#d9b043',
        'yellow-light': '#ffd76b',
      },
      backgroundImage: {
        'gradient-0':
          'linear-gradient(224.78deg, #5390E3 8.12%, #1357B3 92.21%)',
        'search-icon': 'url("./images/search-icon.svg")',
      },
    },
  },
  plugins: [],
};
