export interface ThemeType {
  primary: {
    green: string;
    orange: string;
  },
  secondary: {
    skyblue: string;
  },
  gray: string[];
  breakPoint: {
    desktop: string;
    tablet: string;
    mobile: string;
  },
  ui: {
    textColor: string;
    boxColor: string
    headerColor: string;
  }
}

export const DarkTheme: ThemeType = {
  primary: {
    green: '#489F2D',
    orange: '#f9bb00'
  },
  secondary: {
    skyblue: '#90D7FF'
  },
  gray: [
    '#EEEEEE',
    '#C8C8C8',
    '#999999',
    '#828282',
    '#727272',
    '#616161',
    '#282828',
    '#101010'
  ],
  breakPoint: {
    desktop: '1440px',
    tablet: '1024px',
    mobile: '620px'
  },
  ui: {
    textColor: '#fff',
    boxColor: '#191919',
    headerColor: '#23272a',
  }
}

export const Theme: ThemeType = {
  primary: {
    green: '#489F2D',
    orange: '#000'
  },
  secondary: {
    skyblue: '#90D7FF'
  },
  gray: [
    '#EEEEEE',
    '#C8C8C8',
    '#999999',
    '#828282',
    '#727272',
    '#616161',
    '#282828',
    '#101010'
  ],
  breakPoint: {
    desktop: '1440px',
    tablet: '1024px',
    mobile: '620px'
  },
  ui: {
    textColor: '#000',
    boxColor: '#F4F4F4F4',
    headerColor: '#fff'
  }
}