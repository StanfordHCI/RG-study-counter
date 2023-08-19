import React from "react";
import {View} from "react-native";
import {CounterListView } from "./CounterListView";
import {useGenieSelector} from "reactgenie-lib";
import {Counter} from "../genie/Counter";
import {AppNavigator} from "../App";

export const MainView = () => {
    const allCounters =  useGenieSelector(() => {
        return Counter.All();
    });

    return (
        <View>
            <View >
                <button onClick={() => {
                    const counter = Counter.CreateCounter({name: "", type: "default",created: false});
                    AppNavigator.push('EditCounter', counter)
                }}>Add New Timer</button>
            </View>

            <CounterListView elements={allCounters}/>
        </View>
    )
}