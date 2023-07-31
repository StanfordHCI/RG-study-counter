import React from "react";
import {Provider} from "react-redux";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {createStackNavigator} from '@react-navigation/stack';
import {cardStyle, modalStyle} from "./src/commonStyles";

import ENV from "./config";
import {reactGenieStore} from "./store";
import {ModalityProvider} from "reactgenie-lib";
import {EditCounterView} from "./src/EditCounterView";
import {MainView} from "./src/MainView";

export let AppNavigator: any = null;
type Props = NativeStackScreenProps<any, any>

const CounterTab = ({route, navigation}: Props) => {
    AppNavigator = navigation
    return (
        <MainView {...route.params}/>
    )
}

const EditCounterTab = ({route, navigation}: Props) => {
    AppNavigator = navigation
    return (
        <EditCounterView {...route.params}/>
    )
}

const App = () => {
    let CounterStack = () => {
        let CounterNavigator = createStackNavigator();
        return (
            <CounterNavigator.Navigator screenOptions={{headerShown: true}}>
                <CounterNavigator.Screen name="Counters" component={CounterTab} options={cardStyle}/>
                <CounterNavigator.Screen name="EditCounter" component={EditCounterTab} options={modalStyle}/>
            </CounterNavigator.Navigator>
        );
    };

    return (
        <Provider store={reactGenieStore}>
            <ModalityProvider
                displayTranscript={true}
                codexApiKey={ENV.OPENAI_API_KEY!}
                codexApiBaseUrl={ENV.OPENAI_API_BASE_URL!}
                azureSpeechRegion={ENV.AZURE_SPEECH_REGION!}
                azureSpeechKey={ENV.AZURE_SPEECH_KEY!}
                extraPrompt={'// we are using voice recognition. so there may be errors. Try to think about words with similar sounds. For example "address" can actually be "add this".'}
            >
                <CounterStack/>
            </ModalityProvider>
        </Provider>
    );
};

export default App;