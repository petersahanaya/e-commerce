import { ActionProps, DispatchProps } from "../../types/Types"

const initialState = {
    isLoading : false,
    data : [],
    isError : null
}

const productReducer = (state = initialState, action : ActionProps) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload
        case "FETCH_PENDING" : 
            return action.payload
        case "FETCH_ERROR" : 
            return action.payload
        default:
            return state
    }
}

const productAction = (value : string) => async (dispatch : DispatchProps) => {
    try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${value}`);
        dispatch({type : "FETCH_PENDING", payload : {...initialState, isLoading : true}});
        const data = await res.json();
        dispatch({type : "FETCH_ALL", payload : {...initialState, data, isLoading : false}});

        !res.ok ? new Error("Cannot Fetch Data") : ""
    }catch(err){
        console.log({err})
        dispatch({type : "FETCH_ERROR", payload : {...initialState, isError : err, isLoading : false}})
    }
}

export { productReducer, productAction}