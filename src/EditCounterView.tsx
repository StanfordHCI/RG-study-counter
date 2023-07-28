import {AppNavigator} from '../App';
import {Counter} from '../genie/Counter';
import React from 'react';
import {GenieClassInterface, genieDispatch, useGenieSelector} from 'reactgenie-lib';
// import {commonStyles, textStyles} from './commonStyles';

const EditCounterViewImpl = (props: { id: string }) => {
    const counter: Counter = useGenieSelector(() => {
        return Counter.GetObject(props);
    });

    return (
        <div>
            <div >
                <div >
                    <label>Title </label>
                    <input type='text' size={20} value={counter.name}
                           onChange={(e) => counter.name = e.target.value}></input>
                    <label>Description </label>
                    <input type='text' size={20} value={counter.type}
                           onChange={(e) => counter.type = e.target.value
                           }></input>
                </div>

                {
                    !counter.created?
                        <div >
                            <button onClick={() => {
                                counter.created = true;
                                AppNavigator.pop();
                            }}>Add Counter</button>
                            <button onClick={() => {
                                counter.deleteCounter();
                                AppNavigator.pop();
                            }}>Cancel</button>

                        </div>
                        :
                        <div >
                            <button onClick={() => {
                                AppNavigator.pop();
                            }}>Save</button>
                            <button onClick={() => {
                                AppNavigator.pop();
                                counter.deleteCounter();
                            }}>Delete</button>
                        </div>
                }

            </div>
        </div>
    );
};

export const EditCounterView = GenieClassInterface(
    'Counter',
    'Create a Counter',
    (target: Counter) => target.created ? -1 : 1
)(EditCounterViewImpl);

