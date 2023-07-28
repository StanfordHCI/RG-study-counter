import React from "react";
import { CounterItemView } from "./CounterItemView";
import { GenieClassInterface } from "reactgenie-lib"; 

const CounterListViewImpl = (props: { elements: { id: string }[] }) => {
    return (
        <div>
            {
                props.elements.map((element) => {
                    return <CounterItemView id={element.id} key={element.id}/>
                })
            }
        </div>
    )
}

export const CounterListView = GenieClassInterface(
    "Counter[]",
    "Counters")(CounterListViewImpl)
