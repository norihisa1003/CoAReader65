import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import RNPickerSelect from 'react-native-picker-select';

type Props = NativeStackScreenProps<RootStackParamList>;
interface Materials {
  [type: string]: Object[];
}

export const CoaSelecter = ({navigation}: Props) => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const types = [
    {label: 'typeA', value: 'typeA'},
    {label: 'typeB', value: 'typeB'},
    {label: 'typeC', value: 'typeC'},
    {label: 'typeD', value: 'typeD'},
  ];
  const materials: Materials = {
    typeA: [
      {label: 'materialAA', value: 'materialAA'},
      {label: 'materialAB', value: 'materialAB'},
      {label: 'materialAC', value: 'materialAC'},
      {label: 'materialAD', value: 'materialAD'},
    ],
    typeB: [
      {label: 'materialBA', value: 'materialBA'},
      {label: 'materialBB', value: 'materialBB'},
      {label: 'materialBC', value: 'materialBC'},
      {label: 'materialBD', value: 'materialBD'},
    ],
    typeC: [
      {label: 'materialCA', value: 'materialCA'},
      {label: 'materialCB', value: 'materialCB'},
      {label: 'materialCC', value: 'materialCC'},
      {label: 'materialCD', value: 'materialCD'},
    ],
    typeD: [
      {label: 'materialDA', value: 'materialDA'},
      {label: 'materialDB', value: 'materialDB'},
      {label: 'materialDC', value: 'materialDC'},
      {label: 'materialDD', value: 'materialDD'},
    ],
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <RNPickerSelect
        onValueChange={value => {
          setSelectedType(value);
          console.log(value);
        }}
        items={types}
      />
      <RNPickerSelect
        onValueChange={value => {
          setSelectedMaterial(value);
          console.log(value);
        }}
        items={selectedType ? materials[selectedType] : []}
      />
      <Button
        disabled={selectedMaterial === ''}
        title="OCR"
        onPress={() =>
          navigation.navigate('OcrTaker', {selectedMaterial: selectedMaterial})
        }
      />
    </View>
  );
};
