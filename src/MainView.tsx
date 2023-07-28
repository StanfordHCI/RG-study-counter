import React from "react";
import {AppNavigator} from "../App";
import {Counter} from "../genie/Counter";
import {View} from "react-native";
import {useGenieSelector} from "reactgenie-lib";
import {CounterListView } from "./CounterListView";

export const MainView = () => {
    const allCounters = useGenieSelector(() => {
        return Counter.All();
    });
    return (
        <View>
            <View >
                <button onClick={() => {
                    const timer = Counter.CreateCounter({
                        name: "", type: "default", created: false
                    });
                    AppNavigator.push('EditCounter', timer)
                }}>Add New Timer
                </button>
            </View>

            <CounterListView elements={allCounters}/>
        </View>
    )
}