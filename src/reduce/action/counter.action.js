 import * as Actiontypes from '../Actiontypes'

  export const increment = () => (dispatch) => {
    dispatch({type:Actiontypes.INCREMENT_COUNTER})
  }

  export const decrement = () => (dispatch) => {
    dispatch({type:Actiontypes.DECREMENT_COUNTER})
  }