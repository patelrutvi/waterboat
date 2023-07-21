import * as Actiontypes from '../Actiontypes'

const iniState = {
    facilities:[],
    loding:false,
    error:null
}

export const getFacilitiReducer = (state=iniState,action) => {
    console.log(action,"action");

    switch(action.type){
        case Actiontypes.LODING_DATA :
            return{
                facilities: [],
                loding: true,
                error: null
            }
            case Actiontypes.ERROR_HANDLE :
                return {
                    facilities: [],
                    loding: false,
                    error: action.paylord
                }
        case Actiontypes.GET_FACILITIES : 
        return {
            ...state,
            facilities: action.payload,
            loding:false,
        }
        case Actiontypes.ADD_FACILITIES : 
        return {
            ...state,
            facilities : state.facilities.concat(action.payload)
        }
        case Actiontypes.DELETE_FACILITIES : 
        return {
            ...state,
            facilities:state.facilities.filter((v) => v.id != action.payload)
        }
        case Actiontypes.Edit_FACILITIES :
            return {
                ...state,
                facilities:state.facilities.map((v) => {
                    if(v.id === action.payload.id){
                        return action.payload
                    }else{
                        return v
                    }
                })
            }
        default : 
        return state
    }
}