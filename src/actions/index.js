import axios from 'axios'

export const getUsers = () => {
    return (dispatch) => {
        dispatch(loadUsers());
        axios.post(`https://web44scaffolding.herokuapp.com/api/user/register`)
            .then(res=>{
                console.log("RESPONSE: ", res)
                console.log("DATA: ", res.data)
                // dispatch(fetchSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            });
    }
}

export const FETCH_START = "FETCH_START";
export const loadUsers = ()=> {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (users)=> {
    return({type: FETCH_SUCCESS, payload: users});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error});
}