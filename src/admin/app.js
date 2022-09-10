import AuthLogo from './extensions/logidev-icon.png';
import MenuLogo from './extensions/logidev-logo.png';
import favicon from './extensions/logidev-icon.svg';

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo: AuthLogo,
  },
  menu:{
    logo:MenuLogo,
  },
 // Replace the favicon
  head: {
    favicon: favicon,
  },
  // Add a new locale, other than 'en'
  locales: [
     'id',
  ],
  // Override or extend the theme
  theme: {
    colors: {
      primary100: '#f6ecfc',
      primary200: '#e0c1f4',
      primary500: '#ac73e6',
      primary600: '#9736e8',
      primary700: '#8312d1',
      danger700: '#b72b1a'
    },
  },
  // Extend the translations(note: change text for each language in admin panel)
  translations: {
    en: {
      "Auth.form.welcome.subtitle": "Log in to your Logidev account",
      "Auth.form.welcome.title": "Welcome to Logidev!",
    },
  },
 // Disable video tutorials
  tutorials: false,
 // Disable notifications about new Strapi releases
  notifications: { release: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
