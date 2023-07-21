import * as Actiontypes from '../Actiontypes'

export const getfaciliti = () => (dispatch) => {
    try{
        dispatch(lodingData(true));
        setTimeout(() => {
            fetch("http://localhost:3004/BoatFacilities")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Somthing went wrong')
            })
            .then((data) => dispatch({type:Actiontypes.GET_FACILITIES , payload:data}))
            .catch((error) =>dispatch(errorHandle(error)))
        }, 2000);
       
    }catch(error){
        console.log(error);
    }
   
  
}

export const addFacilite = (data) => (dispatch) => {
    console.log(data,"actionfile");
    try{
        
        fetch("http://localhost:3004/BoatFacilities",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => dispatch({type:Actiontypes.ADD_FACILITIES , payload:data}))
        .catch((error) => console.log(error))

    }catch(error){
        console.log(error);
    }
}

export const deleteFaci = (id) => (dispatch) => {
    console.log(id);
    try {
     fetch("http://localhost:3004/BoatFacilities/" + id ,{
        method: "DELETE",
     })
     .then(dispatch({type:Actiontypes.DELETE_FACILITIES , payload:id}))
     .catch((error) => console.log(error))
    }catch(error){
        console.log(error);
    }
}

export const updateFacili = (data) => (dispatch) => {
    console.log(data);
    try{
        fetch("http://localhost:3004/BoatFacilities" + data.id ,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         })
         .then(dispatch({type:Actiontypes.Edit_FACILITIES , payload:data}))
         .catch((error) => console.log(error))

    }catch(error){
        console.log(error);
    }
}


export const lodingData = (status) => (dispatch) => {
    dispatch({ type: Actiontypes.LODING_DATA, paylord: status })
}

export const errorHandle = (error) => (dispatch) => {
    console.log(error);
    dispatch({ type: Actiontypes.ERROR_HANDLE, paylord: error })
}