/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CoaSelecter} from './screens/CoaSelecter';
import {OcrTaker} from './screens/OcrTaker';
import {ValueEditer} from './screens/ValueEditer';
import {StatisticsViewer} from './screens/StatisticsViewer';

export type RootStackParamList = {
  CoaSelecter: undefined;
  OcrTaker: {[selectedMaterial: string]: string};
  ValueEditer: undefined;
  StatisticsViewer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CoaSelecter" component={CoaSelecter} />
        <Stack.Screen name="OcrTaker" component={OcrTaker} />
        <Stack.Screen name="ValueEditer" component={ValueEditer} />
        <Stack.Screen name="StatisticsViewer" component={StatisticsViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
