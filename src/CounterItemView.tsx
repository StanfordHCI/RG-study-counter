import React from "react";
import {Pressable} from "react-native";
import {useGenieSelector} from "reactgenie-lib";
import {Counter} from "../genie/Counter";

const CounterItemViewImpl = (props: {id:string}) => { //pass the id to CounterItemView
    const counter =  useGenieSelector(() => {//get counter by id
        return Counter.GetObject(props);
    });

    return (
        <div>
            <Pressable onPress={() => {/*TODO: press to edit page*/}}>
                <label>[{counter.type}]</label> <br/> <label>{counter.name}: </label> <br/> <label> {counter.count}</label>
            </Pressable>
            <div>
                <button onClick={() => counter.increment()}>+</button>
                <button onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    )
}

export const CounterItemView = CounterItemViewImpl//TODO: need to be linked