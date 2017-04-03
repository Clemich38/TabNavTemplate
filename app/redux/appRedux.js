const types = {
  SET_PRIMARY_COLOR: 'SET_PRIMARY_COLOR',
  SET_ACCENT_COLOR: 'SET_ACCENT_COLOR',
}

export const actionCreators = {
  setPrimaryColor: (index) => {
    return { type: types.SET_PRIMARY_COLOR, payload: index }
  },
  setAccentColor: (index) => {
    return { type: types.SET_ACCENT_COLOR, payload: index }
  },
}

export const themes = [
  { darkPrimaryColor: '#D32F2F', defaultPrimaryColor: '#F44336', lightPrimaryColor: '#FFCDD2' },
  { darkPrimaryColor: '#C2185B', defaultPrimaryColor: '#E91E63', lightPrimaryColor: '#F8BBD0' },
  { darkPrimaryColor: '#7B1FA2', defaultPrimaryColor: '#9C27B0', lightPrimaryColor: '#E1BEE7' },
  { darkPrimaryColor: '#512DA8', defaultPrimaryColor: '#673AB7', lightPrimaryColor: '#D1C4E9' },
  { darkPrimaryColor: '#303F9F', defaultPrimaryColor: '#3F51B5', lightPrimaryColor: '#C5CAE9' },
  { darkPrimaryColor: '#1976D2', defaultPrimaryColor: '#2196F3', lightPrimaryColor: '#BBDEFB' },
  { darkPrimaryColor: '#0288D1', defaultPrimaryColor: '#03A9F4', lightPrimaryColor: '#B3E5FC' },
  { darkPrimaryColor: '#0097A7', defaultPrimaryColor: '#00BCD4', lightPrimaryColor: '#B2EBF2' },
  { darkPrimaryColor: '#00796B', defaultPrimaryColor: '#009688', lightPrimaryColor: '#B2DFDB' },
  { darkPrimaryColor: '#388E3C', defaultPrimaryColor: '#4CAF50', lightPrimaryColor: '#C8E6C9' },
  { darkPrimaryColor: '#689F38', defaultPrimaryColor: '#8BC34A', lightPrimaryColor: '#DCEDC8' },
  { darkPrimaryColor: '#AFB42B', defaultPrimaryColor: '#CDDC39', lightPrimaryColor: '#F0F4C3' },
  { darkPrimaryColor: '#FBC02D', defaultPrimaryColor: '#FFEB3B', lightPrimaryColor: '#FFF9C4' },
  { darkPrimaryColor: '#FFA000', defaultPrimaryColor: '#FFC107', lightPrimaryColor: '#FFECB3' },
  { darkPrimaryColor: '#F57C00', defaultPrimaryColor: '#FF9800', lightPrimaryColor: '#FFE0B2' },
  { darkPrimaryColor: '#E64A19', defaultPrimaryColor: '#FF5722', lightPrimaryColor: '#FFCCBC' },
  { darkPrimaryColor: '#5D4037', defaultPrimaryColor: '#795548', lightPrimaryColor: '#D7CCC8' },
  { darkPrimaryColor: '#616161', defaultPrimaryColor: '#9E9E9E', lightPrimaryColor: '#F5F5F5' },
  { darkPrimaryColor: '#455A64', defaultPrimaryColor: '#607D8B', lightPrimaryColor: '#CFD8DC' },
  { darkPrimaryColor: '#303030', defaultPrimaryColor: '#454545', lightPrimaryColor: '#A0A0A0' },
]

const initialState = {
  activeTabTintColor: 'white',
  statusBarColor: themes[0].darkPrimaryColor,
  tabBackgroundColor: themes[0].defaultPrimaryColor,
  tabTitleColor: themes[0].lightPrimaryColor,
  buttonColor: themes[0].defaultPrimaryColor,
  textColor: '#212121',
}
export const reducer = (state = initialState, action) => {
  const { activeTabTintColor,
          statusBarColor,
          tabBackgroundColor,
          tabTitleColor,
          buttonColor,
          textColor
        } = state
  const { type, payload } = action

  switch (type) {
    case types.SET_PRIMARY_COLOR: {
      return {
        ...state,
        statusBarColor: themes[payload].darkPrimaryColor,
        tabBackgroundColor: themes[payload].defaultPrimaryColor,
        tabTitleColor: themes[payload].lightPrimaryColor,
        buttonColor: themes[payload].defaultPrimaryColor,
      }
    }
    default: {
      return state
    }
  }
}
