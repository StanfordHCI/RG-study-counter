import React from "react";
import {useGenieSelector} from "reactgenie-lib";
import {Counter} from "../genie/Counter";

//implementation
const EditCounterViewImpl = (props:{id:string}) => {//pass the id to EditCounterView
    const counter =  useGenieSelector(() => {//get counter by id
        return Counter.GetObject(props);
    });

    return (
        <div>
            <div >
                <label>Title </label>
                <input type='text' size={20} value={counter.name}
                       onChange={(e) => timer.name = e.target.value}></input>
                <label>Description </label>
                <input type='text' size={20} value={counter.type}
                       onChange={(e) => counter.type = e.target.value}></input>
                <label>Count </label>
                <input type='number' value={counter.count}
                       onChange={(e) => counter.count = parseInt(e.target.value)}></input>
            </div>
            {
                !counter.created? //show different UI for creating and editing
                    <div>
                        <button onClick={() => {
                            counter.created = true;
                            //TODO: return to main page
                        }}>Add Counter</button>
                        <button onClick={() => {
                            counter.delete();
                            //TODO: return to main page
                        }}>Cancel</button>
                    </div>
                    :
                    <div>
                        <button onClick={() => {
                            //TODO: return to main page
                        }}>Save Counter</button>
                        <button onClick={() => {
                            counter.delete();
                            //TODO: return to main page
                        }}>Delete Counter</button>
                    </div>
            }

        </div>
    );
};
//binding
export const EditCounterView = EditCounterViewImpl; //TODO: need to be linked