const theme = {
  fonts: {
    defaultSize: '14px',
    fontFamily: `'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
  },
  buttonPrimary: {
    backgroundColor: '#1565C0',
    backgroundColorDisabled: '#1565C0',
    backgroundColorHover: '#0d4584',
    borderColor: '#1565C0',
    borderColorDisabled: '#1565C0',
    borderColorHover: '#0d4584',
    color: '#fff',
    colorDisabled: '#fff',
    colorHover: '#fff',
  },
  buttonPrimaryLine: {
    backgroundColor: '#fff',
    backgroundColorDisabled: '#fff',
    backgroundColorHover: '#fff',
    borderColor: '#1565C0',
    borderColorDisabled: '#1565C0',
    borderColorHover: '#0d4584',
    color: '#1565C0',
    colorDisabled: '#1565C0',
    colorHover: '#0d4584',
  },
  buttonSecondary: {
    backgroundColor: '#E3F2FD',
    backgroundColorDisabled: '#E3F2FD',
    backgroundColorHover: '#d1e1ec',
    borderColor: '#E3F2FD',
    borderColorDisabled: '#E3F2FD',
    borderColorHover: '#d1e1ec',
    color: '#1565C0',
    colorDisabled: '#1565C0',
    colorHover: '#1565C0',
  },
  buttonSecondaryLine: {
    backgroundColor: '#fff',
    backgroundColorDisabled: '#fff',
    backgroundColorHover: '#fff',
    borderColor: '#D6EBFD',
    borderColorDisabled: '#E8EAF6',
    borderColorHover: '#BBDEFB',
    color: '#37474F',
    colorDisabled: '#757575',
    colorHover: '#37474F',
  },
  buttonCircle: {
    dimensions: '34px',
  },
  colors: {
    activeListItemBackground: '#fafafa',
    darkGray: '#acacac',
    error: '#fa0000',
    gray: '#b7b7b7',
    green: '#4B9E98',
    mainBodyBackground: '#fff',
    primary: '#1565C0',
    secondary: '#E3F2FD',
    tertiary: '#D6EBFD',
    tertiaryDark: '#90CAF9',
    textColor: '#757575',
    textColorDark: '#37474F',
    textColorDarker: '#333',
    textColorLight: '#999',
    textColorLightish: '#7D8189',
    warning: '#37474F',
  },
  cards: {
    backgroundColor: '#fff',
    border: '1px solid #EEE',
    borderRadius: '8px ',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    paddingHorizontal: '25px',
    paddingVertical: '25px',
    textColor: '#000',
    textColorSecondary: '#333',
    titleColor: '#000',
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    height: '66px',
    color: '#37474F',
  },
  themeBreakPoints: {
    lg: '992px',
    md: '768px',
    sm: '480px',
    xl: '1024px',
    xs: '320px',
    xxl: '1280px',
    xxxl: '1366px',
  },
  borders: {
    borderColor: '#ECEFF1',
    borderColorLighter: '#E8EAF6',
    commonBorderRadius: '6px',
  },
  paddings: {
    mainPadding: '15px',
  },
  textfield: {
    backgroundColor: 'transparent',
    borderColor: '#999',
    borderRadius: '0',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#333',
    fontSize: '13px',
    fontWeight: '400',
    outline: 'none',
    paddingHorizontal: '4px',
    paddingVertical: '6px',
    placeholderColor: '#999',
  },
  mainContainer: {
    maxWidth: '586px',
  },
  dropdown: {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.12)',
    lightTextColor: '#666',
    textColor: '#000',
  },
  outcomes: {
    colors: ['#e1bee7', '#b2dfdb', '#ffe0b2', '#e7e7be', '#bedfb2', '#ffb2f0'],
  },
  modalStyle: {
    content: {
      backgroundColor: '#fff',
      borderColor: '#ECEFF1',
      borderRadius: '6px',
      borderStyle: 'solid',
      borderWidth: '1px',
      bottom: 'auto',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '0',
      height: 'fit-content',
      left: 'auto',
      margin: 'auto 0',
      overflow: 'hidden',
      padding: '25px',
      position: 'relative',
      right: 'auto',
      top: 'auto',
      width: '355px',
    },
    overlay: {
      alignItems: 'unset',
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '10px',
      zIndex: '12345',
    },
  },
}

export default theme
