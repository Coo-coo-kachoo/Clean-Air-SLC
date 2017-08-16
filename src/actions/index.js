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



export function setQuality (airQuality) {
    return {
        type: "SET_QUALITY",
        airQuality,
        reportingArea
    }
}

/*************************************************/
/********CONTACT CONGRESS API*********************/
/*************************************************/
export function setCongressRep(rep) {
    console.log(rep);
    return {
        type: "SET_REP",
        rep
    }
}

export function loadCongressRep(location) {
    return (dispatch)=> {
        return axios.get(`https://www.govtrack.us/api/v2/role?current=true&state=${location.location}`).then((response)=> {
            dispatch(setCongressRep(response.data.objects))
        })
    }
}


/***********************************/
/********AUTH SYSTEM ACTIONS********/
/***********************************/



/*************************************************/
/********CONTENT MANAGEMENT SYSTEM ACTIONS********/
/*************************************************/

