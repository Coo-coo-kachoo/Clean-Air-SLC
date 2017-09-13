import axios from "axios";

/***********************************/
/*****AIR QUALITY API ACTIONS*******/
/***********************************/

export function loadQuality(zip) {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/airquality/${zip}`).then((response) => {
            if(response.data.data.length === 0){
                dispatch(setQuality("No Reported Information for this Area", "None"));
            }else {
                dispatch(setQuality(response.data.data[0].Category.Name, response.data.data[0].ReportingArea));
            }
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


export function toggleSignup() {
  return {
    type: "TOGGLE_SIGNUP"
  }
}

export function toggleLogin() {
  return {
    type: "TOGGLE_LOGIN"
  }
}

/***********************************/
/********AUTH SYSTEM ACTIONS********/
/***********************************/
//in seperate file: auth-actions.js


/*************************************************/
/********CONTENT MANAGEMENT SYSTEM ACTIONS********/
/*************************************************/
