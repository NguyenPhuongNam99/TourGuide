import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AppIoniconss from '../../components/icon/AppIonicons';
import AppMaterIcon from '../../components/icon/AppMaterialIcons';
import {useAppSelector} from '../../app/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const TourScheduleGo = () => {
  const data: any = useAppSelector(state => state.loginSlice.data);
  const [tour, setTour] = useState();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const getTourofHDV = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');

      let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
      setLoading(true);
      const response = await axios.get(
        `http://206.189.37.26:8080/v1/orderTour/getOrderTourOfIdHDV/${data._id}`,
        config,
      );
      setTour(response.data.filter((itemFormat) => itemFormat.item.status == 'chờ xác nhận '));
      console.log('data sstatus', response.data.filter((itemFormat) => itemFormat.item.status == 'chờ xác nhận '))
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTourofHDV();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.blockHeader}>
          <AppIoniconss name="chevron-back" size={20} onPress={() => navigation.goBack()} />
          <Text style={styles.fontBold}>Tour khởi hành </Text>
          <View />
        </View>
      </View>

      {loading ? (
        <View style={[styles.container, styles.justify]}>
          <ActivityIndicator color={'green'} size={30} />
        </View>
      ) : (
        <FlatList
          data={tour}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.containerContent} onPress={() => navigation.navigate('TourGuideDetail' as never, {item: item, index: index} as never)}>
                <View style={styles.blockContent}>
                  <View style={styles.blockTop}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.tourDefault.thumbnail[0].url,
                      }}
                    />
                  </View>
                  <View style={styles.blockBottom}>
                    <Text style={styles.headerTitle}>{item.item.tourName}</Text>
                    <Text style={{fontSize: 12}}>Trạng thái: {item.item.status == 'finish' ? 'hoàn thành' :item.item.status }</Text>
                    <View style={styles.flexContainer}>
                      <View style={styles.flex}>
                        <AppMaterIcon name="place" color={'#3076FE'} />
                        <Text style={styles.place}> Ha Noi</Text>
                      </View>
                      <Text style={styles.price}>
                        {item.item.total_price} dd
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
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
    paddingRight: 9,
  },
  flexContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 3,
    // paddingHorizontal:8
  },
  justify: {
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height: '100%'
  }
});
export default TourScheduleGo;
