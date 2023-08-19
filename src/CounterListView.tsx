import React from "react";
import { CounterItemView } from "./CounterItemView";
import {GenieClassInterface} from "reactgenie-lib";

const CounterListViewImpl = (props:{elements: { id: string }[] }) => { //pass the counters to CounterListView
    const counters =  props.elements

    return (
        <div>
            {
                counters.map((element) => {
                    return <CounterItemView id={element.id} key={element.id}/>
                })
            }
        </div>
    )
}

export const CounterListView =
    GenieClassInterface("Counter[]", "Counter List")(CounterListViewImpl)