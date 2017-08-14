let defaultState = {
    airQuality: "",
}

const mainReducer = (state=defaultState, action) => {
    if(action.type === "SET_QUALITY") {
        return {
            ...state,
            airQuality: action.airQuality
        }
    } else {
        return {
            ...state
        }
    }
};


export default mainReducer;