import axios from "axios";

export function loadQuality(zip) {
    let today = new Date();
    let date = today.getFullYear()+"-"+ (today.getMonth()+1)+"-"+today.getDate();
    return (dispatch) => {
        return axios.get(`http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=${date}&distance=25&API_KEY=3CF907AB-9ECF-459C-A9B3-1746C8A98DD3`).then((response) => {
            dispatch(setQuality(response.data.category.name));
        }).catch((error) => {
            throw error;
        })
    }
}

export function setQuality (airQuality) {
    return {
        type: "SET_QUALITY",
        airQuality
    }
}