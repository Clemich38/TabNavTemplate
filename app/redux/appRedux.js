const types = {
  SET_PRIMARY_COLOR: 'SET_PRIMARY_COLOR',
  SET_ACCENT_COLOR: 'SET_ACCENT_COLOR',
}

export const actionCreators = {
  setPrimaryColor: (color) => {
    return { type: types.SET_PRIMARY_COLOR, payload: color }
  },
  setAccentColor: (color) => {
    return { type: types.SET_ACCENT_COLOR, payload: color }
  },
}

const initialState = {
  activeTabTintColor: 'mediumaquamarine',
  statusBarColor: '#3a6c96',
  tabBackgroundColor: 'steelblue',
  tabTitleColor: 'white',
  buttonColor: 'mediumaquamarine',
  textColor: 'steelblue',
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
        tabBackgroundColor: color,
      }
    }
    default: {
      return state
    }
  }
}
