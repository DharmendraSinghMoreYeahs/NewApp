import {
  View,
  Text,
  StyleSheet,
  Modal,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNewsList} from '../reducer/actions/Actions';
import Header from '../app/Component/Header';
import NewsList from '../app/Component/NewsList';
import {getHp} from '../Utils/utils/viewUtils';
import {Detail} from '..';
import {RadioButton} from 'react-native-paper';

const Home = props => {
  const dispatch = useDispatch();

  const newsList = useSelector(state => state.newsList);

  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('everything');
  const [refresh, setRefresh] = useState(false);

  const getAllNew = async () => {
    try {
      let q = 'Apple';
      let from = '2022-06-18';
      let sortBy = 'popularity';
      let apiKey = '0cafdf0c30d94844bc3991b657d4a565';
      let everything = checked;
      console.log('--->>>', everything);

      fetch(
        `https://newsapi.org/v2/${everything}?q=${q}&from=${from}&sortBy=${sortBy}&apiKey=${apiKey}`,
      )
        .then(response => response.json())
        .then(data => {
          dispatch(setNewsList(data?.articles));
        });
    } catch (e) {
      console.log('API CALLING ERROR', e);
    }
  };

  useEffect(() => {
    getAllNew();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <Header
        title={'Top Headline'}
        handleFilter={() => setModalVisible(!modalVisible)}
      />
      <View style={styles.fltListView}>
        <NewsList data={newsList} navigateTitle={Detail} />
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              <View style={styles.rowView}>
                <RadioButton
                  value="top-headlines"
                  status={checked === 'top-headlines' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('top-headlines')}
                />
                <Text style={styles.modalText}>Top-Headlines</Text>
              </View>

              <View style={styles.rowView}>
                <RadioButton
                  value="everything"
                  status={checked === 'everything' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('everything')}
                />
                <Text style={styles.modalText}>Everything</Text>
              </View>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setRefresh(!refresh);
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fltListView: {
    marginVertical: getHp(10),
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'wrap',
  },

  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: getHp(10),
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
