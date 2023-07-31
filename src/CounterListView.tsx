import React from "react";
import { CounterItemView } from "./CounterItemView";

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

export const CounterListView = CounterListViewImpl;//TODO: need to be linked