import React from "react";

import {Pressable, Text, View} from "react-native";
import {GenieClassInterface, useGenieSelector} from "reactgenie-lib";
import {Counter} from "../genie/Counter";
import {AppNavigator} from "../App";

const CounterItemViewImpl = (props: {id:string}) => { //pass the id to CounterItemView
    const counter =  useGenieSelector(() => {//get counter by id
        return Counter.GetObject(props);
    });

    return (
        <div>
            <Pressable onPress={() => {AppNavigator.push('EditCounter', {id: props.id})}}>
                <View style={{margin:5,}}>
                    <Text style={{fontSize:20}}>{'['+counter.type+']'}</Text>
                    <Text style={{fontSize:20}}>{counter.name} </Text>
                    <Text style={{fontSize:20}} >{counter.count}</Text>
                </View>
            
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