import axios from "axios";

export function loadQuality(zip) {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/airquality/${zip}`).then((response) => {
            dispatch(setQuality(response.data.category.name));
        }).catch((error) => {
            throw error;
        })
    }
}

export function loadCongressRep(location) {
    return (dispatch)=> {
        return axios.get(`https://www.govtrack.us/api/v2/role?current=true&state=${location.location}`).then((response)=> {
            dispatch(setCongressRep(response.data.objects))
        })
    }
}

export function setQuality (airQuality) {
    return {
        type: "SET_QUALITY",
        airQuality
    }
}

export function setCongressRep(rep) {
    console.log(rep);
    return {
        type: "SET_REP",
        rep
    }
}