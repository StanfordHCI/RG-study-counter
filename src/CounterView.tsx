import React from "react";
import { Counter } from "../genie/Counter";
import { useGenieSelector, genieDispatch } from 'reactgenie-lib'
import { GenieClassInterface } from 'reactgenie-lib'

 
const CounterViewImpl = (props: { id: number}) => {
    const counter: Counter = useGenieSelector(() => {
        return Counter.GetObject(props);
    });
    const counterName = useGenieSelector(() => {
        return counter.name;
    });
    const counterValue = useGenieSelector(() => {
        return counter.count;
    });
    const counterType = useGenieSelector(() => {
        return counter.type;
    });
    return (
        <div>
            <label>[{counterType}]</label> <br/> <label>{counterName}: </label> <br/> <label> {counterValue}</label>
            <button onClick={() => genieDispatch(() => counter.increment())}>+</button>
            <button onClick={() => genieDispatch(() => counter.decrement())}>-</button>
        </div>
    )
}


export const CounterView = GenieClassInterface((counter: Counter) => 
            `${counter.name} Counter`, "Counter", 1)(CounterViewImpl)