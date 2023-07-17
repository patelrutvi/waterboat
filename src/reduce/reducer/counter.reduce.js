import * as Actiontypes from '../Actiontypes'

const initState = {
    count: 0
}

export const counterReduce = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case Actiontypes.INCREMENT_COUNTER:
            return {
                count: state. count + 1
            }
        case Actiontypes.DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}