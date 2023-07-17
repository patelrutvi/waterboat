import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../reduce/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch()
    const counterval = useSelector(state => state.counter)
    console.log(counterval);

    const handleincr = () => {
        dispatch(increment())
    }
    const handledecr = () => {
        dispatch(decrement())

    }

    return (
        <div style={{margin:'20px'}}>
            <h1 style={{marginBottom:"50px"}}>counter</h1>
            <button onClick={() => handleincr()}>+</button>
            <span>{counterval.count}</span>
            <button onClick={() => handledecr()}>-</button>
        </div>
    );
}

export default Counter;