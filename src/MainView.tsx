import {AppNavigator} from "../App";
import {useGenieSelector} from "reactgenie-lib";
import {Counter} from "../genie/Counter";
import React from "react";
import {CounterListView} from "./CounterListView";
import {View} from "react-native";

export const MainView = () => {
    const allCounters =  useGenieSelector(() => {
        return Counter.All(); //get all counters
    });

    return (
        <View>
            <View >
                <button style={{marginLeft:10, marginRight:10,marginTop:10,fontSize:20}}
                onClick={() => {
                    //create a new counter to edit
                    const counter = Counter.CreateCounter({name: "", type: "default",created: false});
                    AppNavigator.push('EditCounter', counter)
                }}>Add New Counter</button>
            </View>

            <CounterListView elements={allCounters}/>
        </View>
    )
}