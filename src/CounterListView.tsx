import React from "react";
import { CounterView } from "./CounterView";
import { GenieClassInterface } from 'reactgenie-lib'

 
const CounterListViewImpl = (props: { elements: { id: number }[] }) => {
    return (
        <div>
            {
                props.elements.map((element) => {
                    return <CounterView id={element.id} key={element.id}/>
                })
            }
        </div>
    )
}

export const CounterListView = GenieClassInterface("Counters", "Counter[]",1)(CounterListViewImpl)
