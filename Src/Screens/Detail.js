import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Header from '../app/Component/Header';
import {useSelector} from 'react-redux';
import {getHp} from '../Utils/utils/viewUtils';
import {FONTSIZE} from '../Utils/utils/fontSize';

const Detail = props => {
  console.log(props?.route);
  const newsById = useSelector(state => state.newsById);
  console.log(newsById);
  const {author, content, urlToImage, url, title} = newsById;

  return (
    <View style={styles.container}>
      <Header title={'News Detail'} backButton={true} />
      <View style={styles.contentView}>
        <Image
          style={styles.logo}
          source={{
            uri: urlToImage,
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.txtDetail}>{content}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentView: {
    width: '100%',
  },
  logo: {
    width: '100%',
    height: '60%',
  },

  title: {
    marginVertical: getHp(10),
    fontSize: FONTSIZE.Text18,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#000',
    textAlign: 'center',
  },
  txtDetail: {
    // marginTop: getHp(20),
    fontSize: FONTSIZE.Text14,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#000',
    textAlign: 'center',
  },
});
