import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import AppIoniconss from '../../components/icon/AppIonicons';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import {useAppSelector} from '../../app/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const TourGuide = () => {
  const data: any = useAppSelector(state => state.loginSlice.data);
  const [tour, setTour] = useState();

  console.log('data', data);
  const getTourofHDV = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');

      let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

      const response = await axios.get(
        `http://206.189.37.26:8080/v1/orderTour/getOrderTourOfIdHDV/${data._id}`,
        config,
      );
      console.log('reponse', response.data);
      setTour(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getTourofHDV();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.blockHeader}>
          <AppIoniconss name="chevron-back" />
          <Text style={styles.fontBold}>Tour của bạn </Text>
          <View />
        </View>
      </View>

      <FlatList
        data={tour}
        renderItem={({item}) => {
          return (
            <View style={styles.containerContent}>
              <View style={styles.blockContent}>
                <View style={styles.blockTop}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: 'https://www.orioly.com/wp-content/uploads/2016/12/qualities-of-a-good-tour-guide-cover-illustration.png',
                    }}
                  />
                </View>
                <View style={styles.blockBottom}>
                  <Text style={styles.headerTitle}>{item.tourName}</Text>
                  <View style={styles.flex}>
                    <AppMaterIcon
                      name="place"
                      color={'#3076FE'}
                      style={styles.padding}
                    />
                    <Text style={styles.place}> Ha Noi</Text>
                  </View>
                  <Text style={styles.price}>{item.total_price} dd</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  fontBold: {
    fontWeight: 'bold',
    color: 'black',
  },
  containerContent: {
    width: '100%',
    height: 243,
    paddingHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  blockContent: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  blockTop: {
    flex: 0.7,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  blockBottom: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  flex: {
    flexDirection: 'row',
  },
  padding: {
    paddingRight: 2,
  },
  place: {
    fontSize: 10,
    color: '#3076FE',
  },
  price: {
    color: '#FF5F24',
    fontSize: 10,
  },
});
export default TourGuide;
