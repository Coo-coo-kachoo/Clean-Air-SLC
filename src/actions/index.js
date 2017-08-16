import axios from "axios";

/***********************************/
/*****AIR QUALITY API ACTIONS*******/
/***********************************/

export function loadQuality(zip) {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/airquality/${zip}`).then((response) => {
            dispatch(setQuality(response.data.data[0].Category.Name, response.data.data[0].ReportingArea));
        }).catch((error) => {
            throw error;
        })
    }
}

export function setQuality (airQuality, reportingArea) {
    return {
        type: "SET_QUALITY",
        airQuality,
        reportingArea
    }
}

/***********************************/
/********AUTH SYSTEM ACTIONS********/
/***********************************/



/*************************************************/
/********CONTENT MANAGEMENT SYSTEM ACTIONS********/
/*************************************************/
