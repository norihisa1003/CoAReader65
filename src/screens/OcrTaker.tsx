import React, {useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {RNCamera} from 'react-native-camera';
import TesseractOcr, {
  LANG_ENGLISH,
  LEVEL_BLOCK,
  useEventListener,
} from 'react-native-tesseract-ocr';
import RNFS from 'react-native-fs';
import {setNativeExceptionHandler} from 'react-native-exception-handler';

setNativeExceptionHandler(exceptionString => {
  console.log('Native error');
  console.error(exceptionString);
});

type Props = NativeStackScreenProps<RootStackParamList>;

export const OcrTaker = ({route, navigation}: Props) => {
  const {selectedMaterial} = route.params;
  const camera = useRef<RNCamera>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');

  useEventListener('onProgressChange', p => {
    setProgress(p.percent / 100);
  });

  const takePicture = async () => {
    try {
      if (camera) {
        const options = {quality: 1.0, base64: true};
        const data = await camera.current?.takePictureAsync(options);
        const newPath = '/storage/emulated/0/Pictures/test.jpg';
        if (data) {
          console.log(data.uri);
          await RNFS.moveFile(data.uri, newPath);
          const exists = await RNFS.exists(newPath);
          console.log(exists);
          await recognizeTextFromImage(newPath);
          navigation.navigate('ValueEditer');
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const recognizeTextFromImage = async (path: string) => {
    setIsLoading(true);

    try {
      const recognizedText = await TesseractOcr.recognize(path, LANG_ENGLISH, {
        level: LEVEL_BLOCK,
      });
      console.log(recognizedText);
      setText(recognizedText);
    } catch (err) {
      console.error(err);
      setText('');
    }

    setIsLoading(false);
    setProgress(0);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{selectedMaterial}</Text>
      <RNCamera
        ref={camera}
        style={{flex: 1, width: '100%', height: '100%'}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <Button disabled={isLoading} title="SNAP" onPress={() => takePicture()} />
    </View>
  );
};
