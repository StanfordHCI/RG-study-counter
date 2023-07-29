import React from "react";
import {Pressable} from "react-native";
import {AppNavigator} from "../App";
import {GenieClassInterface, useGenieSelector} from "reactgenie-lib";
import {Counter} from "../genie/Counter";


const CounterItemViewImpl = (props: {id:string}) => {
    const counter =  useGenieSelector(() => {//get counter by id
        return Counter.GetObject(props);
    });

    return (
        <div>
        <Pressable onPress={() => {AppNavigator.push('EditCounter', {id: props.id})}}>

                <label>[{counter.type}]</label> <br/> <label>{counter.name}: </label> <br/> <label> {counter.count}</label>
        </Pressable>
                <button onClick={() => counter.increment()}>+</button>
                <button onClick={() => counter.decrement()}>-</button>
            </div>

    )
}

export const CounterItemView = GenieClassInterface(
    "Counter",
    (counter: Counter) => `${counter.id} Counter`,
    (counter: Counter) => counter.created ? 1 : -1
)(CounterItemViewImpl)
