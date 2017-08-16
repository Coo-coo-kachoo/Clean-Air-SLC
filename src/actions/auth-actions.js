import axios from "axios";

export function login (username, password) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/login", {username, password}).then((response) => {
      dispatch(setToken(response.data.token));
      console.log(response.data.token);
      dispatch(setPriv(response.data.priv));
    })
    .catch((err) => {
      alert("username or password are not correct...")
      throw err;
    });
  }
}

export function signup(username, password) {

  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/signup", {username, password}).then((response) => {
      alert("account created");
    })
    .catch((err) => {
      alert("username taken, please try again...")
      throw err;
    });
  }
}

export function loadUserQue(token) {
  return (dispatch) => {
    return axios.get("http://localhost:8080/auth/userque", {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(setUserQue(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function loadUsers(username, priv, token) {
  return (dispatch) => {
    return axios.get("http://localhost:8080/auth/user", {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      dispatch(setCurrentUsers(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

//WORKING ON
export function changeStatus(username, priv, token) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/user", {username, priv}, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      alert(`${username} status changed to: ${priv}`)
      dispatch(loadUserQue(token));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function addUser(username, priv, token) {
  return (dispatch) => {
    return axios.post("http://localhost:8080/auth/userque", {username, priv}, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      alert(`${username} added with authorization level: ${priv}`)
      dispatch(loadUserQue(token));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function deleteUser(username, id, token) {
  return (dispatch) => {
    return axios.delete(`http://localhost:8080/auth/userque/${id}`, {headers: {Authorization: `Bearer ${token}`}}).then((response) => {
      alert(`${username} has been deleted`)
      dispatch(loadUserQue(token));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function setCurrentUsers(data) {
  return {
    type: "SET_CURRENT_USERS",
    data
  }
}

export function setUserQue(data) {
  return {
    type: "SET_USER_QUE",
    data
  }
}


export function setToken(token) {
  return {
    type: "SET_TOKEN",
    token
  }
}

export function setPriv(priv) {
  return {
    type: "SET_PRIV",
    priv
  }
}
