import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList>;

export const StatisticsViewer = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>OcrTaker</Text>
      <Button title="Done" onPress={() => navigation.popToTop()} />
    </View>
  );
};
