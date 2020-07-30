import React, { FunctionComponent } from 'react';
import { ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text } from 'native-base';
import { SECONDARY_COLOR, MAIN_COLOR, FontFamily, MAIN_FONT_SIZE } from '../constants/constants';
import {StyleSheet, StatusBar} from 'react-native';
import ShrinkAnimationView from '../animations/ShrinkAnimationView';

interface Props{
  navigation?: DrawerNavigationProp<ParamListBase, 'Home'>;
}

const Rates: FunctionComponent<Props> = () => {
  return(
    <ShrinkAnimationView style={Style.view}>
      <StatusBar barStyle='light-content' backgroundColor={SECONDARY_COLOR}/>
      <Text style={[Style.text]}>
        Coming Soon
      </Text>
    </ShrinkAnimationView>
  );
};

const Style = StyleSheet.create({
  view: {
    backgroundColor: SECONDARY_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: MAIN_COLOR,
    fontFamily: FontFamily,
    fontSize: MAIN_FONT_SIZE,
    textAlignVertical: 'center',
  },
});

export default Rates;