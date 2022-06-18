import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {getHp, getWp} from '../../Utils/utils/viewUtils';
import {FONTSIZE} from '../../Utils/utils/fontSize';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setNewsById} from '../../reducer/actions/Actions';

const Card = ({item, index, navigateTitle, navigation, dispatch}) => {
  const {urlToImage, title} = item;
  const image = {uri: urlToImage};

  const handleNavigate = async item => {
    dispatch(setNewsById(item));
    navigation.navigate(navigateTitle);
  };

  return (
    <TouchableOpacity key={index} onPress={() => handleNavigate(item)}>
      <View style={styles.cardView}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.Title}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const NewsList = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, navigateTitle} = props;
  return (
    <FlatList
      horizontal={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={data}
      renderItem={({item, index}) => (
        <Card
          item={item}
          index={index}
          navigation={navigation}
          navigateTitle={navigateTitle}
          dispatch={dispatch}
        />
      )}
      // keyExtractor={index => index}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({
  cardView: {
    height: getHp(200),
    width: getWp(190),
    // backgroundColor: 'red',
    marginHorizontal: getHp(5),
    marginVertical: getHp(4),
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Title: {
    fontSize: FONTSIZE.Text22,
    fontWeight: '700',
    color: '#FFF',
    textAlign: 'center',
  },
});
