import axios from "axios";

/***********************************/
/*****AIR QUALITY API ACTIONS*******/
/***********************************/

export function loadQuality(zip) {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/airquality/${zip}`).then((response) => {
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

/***********************************/
/********AUTH SYSTEM ACTIONS********/
/***********************************/



/*************************************************/
/********CONTENT MANAGEMENT SYSTEM ACTIONS********/
/*************************************************/
