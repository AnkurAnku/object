import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text} from 'react-native';

export default function Splash({navigation}) {
  //   const navigation = useNavigation();
  return (
    <Button title="click" onPress={() => navigation.navigate('Home')}></Button>
  );
}
