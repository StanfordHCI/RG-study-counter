import {StartRG} from "../genie/StartRG";
import React from "react";
import {GenieClassInterface} from "reactgenie-lib"
import {useGenieSelector} from "reactgenie-lib";
import {commonStyles, textStyles} from "./commonStyles";

const StartViewImpl = (props: { id: string}) => {
    const startRG: StartRG = useGenieSelector(() => {
        return StartRG.GetObject(props);
    });


    return (
        <div style={commonStyles.timerFormContainer}>
            <label style={textStyles.heading2}>{startRG.content}</label>
        </div>
    )
}


export const StartView = GenieClassInterface("StartRG","Start Page")(StartViewImpl)
