let defaultState = {
    airQuality: "",
    rep: []
}

const mainReducer = (state=defaultState, action) => {
    if(action.type === "SET_QUALITY") {
        return {
            ...state,
            airQuality: action.airQuality
        }
    } else if(action.type === "SET_REP") {
        return {
            ...state,
            rep: action.rep
        }
    } else {
        return {
            ...state
        }
    }
};


export default mainReducer;