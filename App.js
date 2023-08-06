import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import RNUssdDial from 'react-native-ussd-dial';

const App = () => {
  const getDeviceName = async () => {
    try {
      const deviceName = await RNUssdDial.getDeviceName();
      console.log('deviceName: ', deviceName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Button onPress={getDeviceName} title="get device name" color="#841584" />
    </SafeAreaView>
  );
};

export default App;
