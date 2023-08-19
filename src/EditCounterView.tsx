import React from "react";
import {GenieClassInterface, useGenieSelector} from "reactgenie-lib";
import {Counter} from "../genie/Counter";
import {AppNavigator} from "../App";

//implementation
const EditCounterViewImpl = (props:{id?:string}) => {
    const counter =  useGenieSelector(() => {
        return Counter.GetObject(props);
    });

    return (
        <div>
            <div >
                <label>Title </label>
                <input type='text' size={20} value={counter.name}
                       onChange={(e) => counter.name = e.target.value}></input>
                <label>Description </label>
                <input type='text' size={20} value={counter.type}
                       onChange={(e) => counter.type = e.target.value}></input>
                <label>Count </label>
                <input type='number' value={counter.count}
                       onChange={(e) => counter.count = parseInt(e.target.value)}></input>
            </div>
            {
                !counter.created?
                    <div>
                        <button onClick={() => {
                            counter.created = true;
                            AppNavigator.pop()
                        }}>Add Counter</button>
                        <button onClick={() => {
                            counter.delete();
                            AppNavigator.pop()
                        }}>Cancel</button>
                    </div>
                    :
                    <div>
                        <button onClick={() => {
                            AppNavigator.pop()
                        }}>Save Counter</button>
                        <button onClick={() => {
                            counter.delete();
                            AppNavigator.pop()
                        }}>Delete Counter</button>
                    </div>
}

</div>
);
};
export const EditCounterView = GenieClassInterface(
    "Counter",
    "Create a Counter",
    (target: Counter) => target.created ? -1 : 1
)(EditCounterViewImpl)