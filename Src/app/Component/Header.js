import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {getHp, getWp} from '../../Utils/utils/viewUtils';
import {FONTSIZE} from '../../Utils/utils/fontSize';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import {useNavigation} from '@react-navigation/core';

const Header = props => {
  const navigation = useNavigation();

  const {title, backButton, handleFilter = () => {}} = props;

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to close app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  return (
    <View style={styles.header}>
      {backButton && (
        <View style={{width: '10%', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color={'#000'} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.leftView}>
        <Text style={styles.HeaderTitle}>{title}</Text>
      </View>
      {!backButton && (
        <View style={styles.rightView}>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="search" size={30} color={'#000'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilter}>
            <Feather name="menu" size={30} color={'#000'} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: getHp(60),
    backgroundColor: '#C4C4C4',
    paddingVertical: getHp(10),
    paddingHorizontal: getHp(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderTitle: {
    fontSize: FONTSIZE.Text26,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#000',
  },
  leftView: {
    width: '75%',
    justifyContent: 'center',
  },
  rightView: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: getWp(200),
  },
});
