import React from "react";
import {Provider} from "react-redux";

import ENV from "./config";
import {reactGenieStore} from "./store";
import {ModalityProvider} from "reactgenie-lib";

import {StartView} from "./src/StartView";

const App = () => {

    return (
        <Provider store={reactGenieStore}>
            <ModalityProvider
                displayTranscript={true}
                codexApiKey={ENV.OPENAI_API_KEY!}
                codexApiBaseUrl={ENV.OPENAI_API_BASE_URL!}
                azureSpeechRegion={ENV.AZURE_SPEECH_REGION!}
                azureSpeechKey={ENV.AZURE_SPEECH_KEY!}
                extraPrompt={
                    '// we are using voice recognition. so there may be errors. Try to think about words with similar sounds. For example "address" can actually be "add this".'
                }
            >
                <StartView id={"1"}/>
            </ModalityProvider>
        </Provider>
    );
};

export default App;