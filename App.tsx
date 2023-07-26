import React from "react";
import { reactGenieStore } from "./store";
import { ModalityProvider, useGenieSelector } from "reactgenie-lib";
import { Counter } from "./genie/Counter";
import { Provider } from "react-redux";
import ENV from "./config";
import { CounterListView } from "./src/CounterListView";
import { CounterExamples } from "./genie/Counter";

 
const CounterList = () => {
    const allview = useGenieSelector(() => {
        return Counter.All();
    });
    return(
        <CounterListView elements={allview} />
    )
}
const App = () => {
    return(
        <Provider store={reactGenieStore}>//load your own store
            <ModalityProvider
                    examples={CounterExamples}//example prompt
                    displayTranscript={true}
                    codexApiKey={ENV.OPENAI_API_KEY!}
                    codexApiBaseUrl={ENV.OPENAI_API_BASE_URL!}
                    azureSpeechRegion={ENV.AZURE_SPEECH_REGION!}
                    azureSpeechKey={ENV.AZURE_SPEECH_KEY!}
                    extraPrompt={''}// extra prompt
                >
                <CounterList/> // you UI code
            </ModalityProvider>
        </Provider>
    )}
    export default App;