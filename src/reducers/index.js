let defaultState = {
    airQuality: "",
    userQue: [],
    currentUsers: [],
    username: "",
    password: "",
    token: "",
    reportingArea: ""
}

const mainReducer = (state=defaultState, action) => {
    if(action.type === "SET_QUALITY") {
        return {
            ...state,
            airQuality: action.airQuality,
            reportingArea: "Reporting Area: " + action.reportingArea
        }
    } else if (action.type === "SET_TOKEN") {
    return {
      ...state,
      token: action.token
    }
  }  else if (action.type === "SET_PRIV") {
    return {
      ...state,
      priv: action.priv
    }
  } else if (action.type === "SET_USER_QUE") {
    return {
      ...state,
      userQue: action.data
    }
  } else if (action.type === "SET_CURRENT_USERS") {
    return {
      ...state,
      currentUsers: action.data
    }
  } else {
      return {
        ...state
    }
  }
}


export default mainReducer;
