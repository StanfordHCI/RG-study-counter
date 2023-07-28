import React from "react";
import {Pressable, Text, View} from "react-native";
import { Counter } from "../genie/Counter";
import { useGenieSelector } from 'reactgenie-lib'
import { GenieClassInterface } from "reactgenie-lib";
import {AppNavigator} from "../App";
 
const CounterItemViewImpl = (props: { id: number}) => {
    const counter: Counter = useGenieSelector(() => {
        return Counter.GetObject(props);
    });
    return (
        <Pressable onPress={() => {
            AppNavigator.push('EditCounter', {id: props.id})
        }}>
        <div>

            <label>[{counter.type}]</label> <br/> <label>{counter.name}: </label> <br/> <label> {counter.count}</label>
            <button onClick={() => counter.increment()}>+</button>
            <button onClick={() => counter.decrement()}>-</button>

        </div>
        </Pressable>
    )
}

export const CounterItemView = GenieClassInterface(
    "Counter",
    (counter: Counter) => `${counter.name} Counter`,
    (counter: Counter) => counter.created ? 1 : -1
)(CounterItemViewImpl)