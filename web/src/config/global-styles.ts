const primaryColors = {
  default: '#E4C2BE',
  light: '#F8E9E7',
  dark: '#C79792',
};

const uiColors = {
  lightBackground: '#FFFCF9',
  whiteBackground: '#FFFFFF',
  darkSurface: '#513232',
  grey75percent: '#7C6666',
  grey50percent: '#A89B9B',
  grey25percent: '#E9E6E6',
  grey10percent: '#F2F0F0',
  grey5percent: '#FCFAFA',
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
    regular: {
      name: 'Proxima Nova',
      fontWeight: 400,
    },
    bold: {
      name: 'Proxima Nova Bold',
      fontWeight: 700,
    },
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
      lineHeight: '64px',
    },
    h2: {
      font: fonts.primary,
      fontSize: '56px',
      lineHeight: '62px',
    },
    h3: {
      font: fonts.primary,
      fontSize: '40px',
      lineHeight: '48px',
    },
    h4: {
      font: fonts.primary,
      fontSize: '30px',
      lineHeight: '36px',
    },
    h5: {
      font: fonts.primary,
      fontSize: '24px',
      lineHeight: '28px',
    },
    h6: {
      font: fonts.secondary.bold,
      fontSize: '12px',
      lineHeight: '15px',
    },
  },
  subtitle: {
    font: fonts.secondary.regular,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '4px',
    textTransform: 'uppercase',
  },
  labels: {
    large: {
      regular: {
        font: fonts.secondary.regular,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '1px',
      },
      bold: {
        font: fonts.secondary.bold,
        fontSize: '16px',
        lineHeight: '16px',
        letterSpacing: '1px',
      },
    },
    small: {
      font: fonts.secondary.regular,
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '1px',
    },
  },
  bodyCopy: {
    regular: {
      fontWeight: fonts.secondary.regular.fontWeight,
      font: fonts.secondary.regular,
      large: {
        fontSize: '20px',
        lineHeight: '32px',
        letterSpacing: '1px',
      },
      small: {
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '1px',
      },
    },
    bold: {
      fontWeight: fonts.secondary.bold.fontWeight,
      font: fonts.secondary.bold,
      large: {
        fontSize: '20px',
        lineHeight: '28x',
        letterSpacing: '1px',
      },
      small: {
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '1px',
      },
    },
  },
  links: {
    textTransform: 'uppercase',
    large: {
      font: fonts.secondary.bold,
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '2px',
    },
    small: {
      font: fonts.secondary.regular,
      fontSize: '11px',
      lineHeight: '12px',
      letterSpacing: '3px',
    },
  },
  captions: {
    font: fonts.secondary.regular,
    large: {
      fontSize: '14px',
      lineHeight: '17px',
    },
    small: {
      fontSize: '12px',
      lineHeight: '15px',
      letterSpacing: '3px',
    },
  },
};
