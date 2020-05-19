const primaryColors = {
  default: '#E4C2BE',
  light: '#F8E9E7',
  dark: '#C79792',
};

const uiColors = {
  lightBackground: '#FFFCF9',
  whiteBackground: '#FFFFFF',
  darkSurface: '#513232',
  grey5percent: '#F5F5F5',
  copy: '#3E3939',
  error: '#AC4F4F',
};

const secondaryColors = {
  default: '#E0A97C',
  light: '#FBF0E5',
};

export const fonts = {
  primary: {
    name: 'Ortica',
    regularWeight: 300,
  },
  secondary: {
    name: 'Mr Eaves XL Mod OT',
    regularWeight: 400,
    boldWeight: 700,
  },
};

export const colors = {
  ui: uiColors,
  primary: primaryColors,
  secondary: secondaryColors,
};

export const typography = {
  titles: {
    h1: {
      font: fonts.primary,
      fontSize: '64px',
      lineHeight: '56px',
    },
    h2: {
      font: fonts.primary,
      fontSize: '48px',
      lineHeight: '48px',
    },
    h3: {
      font: fonts.primary,
      fontSize: '40px',
      lineHeight: '105%',
    },
    h4: {
      font: fonts.primary,
      fontSize: '32px',
      lineHeight: '105%',
    },
    h5: {
      font: fonts.primary,
      fontSize: '24px',
      lineHeight: '31px',
    },
    h6: {
      font: fonts.primary,
      fontSize: '20px',
      lineHeight: '20px',
    },
  },
  subtitle: {
    font: fonts.secondary,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
  },
  labels: {
    font: fonts.secondary,
    large: {
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '1px',
    },
    small: {
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '1px',
    },
  },
  bodyCopy: {
    font: fonts.secondary,
    large: {
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '1px',
    },
    small: {
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '1px',
    },
  },
  links: {
    font: fonts.secondary,
    textTransform: 'uppercase',
    large: {
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: '4px',
    },
    small: {
      fontSize: '11px',
      lineHeight: '12px',
      letterSpacing: '3px',
    },
  },
  captions: {
    font: fonts.secondary,
    large: {
      fontSize: '14px',
      lineHeight: '14px',
    },
    small: {
      fontSize: '11px',
      lineHeight: '12px',
      letterSpacing: '3px',
    },
  },
};
