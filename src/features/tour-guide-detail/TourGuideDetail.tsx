import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AppIonicons from '../../components/icon/AppIonicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../app/store';

const TourGuideDetail = ({route}) => {
  const {item, index} = route.params;
  const [dataResponse, setDataResponse] = useState<any>();
  const navigation = useNavigation();
  const data: any = useAppSelector(state => state.loginSlice.data);
  const [loading, setLoading] = useState(false);
  const [tour, setTour] = useState<any>();
  console.log('index', index)

  const confirmTour = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');
      setLoading(true);
      const data = {
        status: 'xác nhận',
      };
      const response = await axios.put(
        `http://206.189.37.26:8080/v1/orderTour/onlyUpdateStatusTour/${item.item._id}`,
        data,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      console.log('response', response);
      setLoading(false);
      setTour(response.data)
      setDataResponse(response.data);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  const finishTour = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');
      setLoading(true);

      const dataFinish = {
        status: 'finish',
        userHDVID: data._id,
      };
      const response = await axios.put(
        `http://206.189.37.26:8080/v1/orderTour/onlyUpdateStatusTour/${item.item._id}`,
        dataFinish,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      setLoading(false);

      setTour(response.data);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  const getTourofHDV = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');

      let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
      console.log('dataa', data._id)
      setLoading(true);
      const response = await axios.get(
        `http://206.189.37.26:8080/v1/orderTour/getOrderTourOfIdHDV/${data._id}`,
        config,
      );

      console.log('repo', response.data[index].item)
      setTour(response.data[index].item);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTourofHDV();
  }, []);

  console.log(' String(tour?.status) === ',  tour)

  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <View style={styles.blockHeader}>
          <AppIonicons
            name="arrow-back"
            size={18}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitleContent}>Chi tiết chuyến đi</Text>
        </View>
      </View>
      {loading && (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99,
          }}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      )}

      <View style={styles.containerContent}>
        <View style={styles.contentLeft}>
          <Text>{item.item.fullName}</Text>
          <Text style={styles.sizeTitle}>Email: {item.item.emailUser}</Text>
          <Text style={styles.sizeTitle}>
            Số điện thoại : {item.item.phoneUser}
          </Text>
        </View>
        <View style={styles.contentRight}>
          <View style={styles.imageAvatar}></View>
        </View>
      </View>

      <View style={styles.containerTour}>
        <Text style={styles.textTour}>Mã chuyến đi: {item.item._id} </Text>
        <Text style={styles.sizeTitle}>
          Tên chuyến đi: {item.item.tourName}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.Tourdetail}
        onPress={() =>
          navigation.navigate('TourOrdeDtail' as never, {item: item} as never)
        }>
        <View style={styles.blockTour}>
          <View style={styles.tourLeft}>
            <Image
              source={{uri: item.tourDefault.thumbnail[0].url}}
              style={styles.fullwidth}
            />
          </View>
          <View style={styles.tourRight}>
            <Text style={styles.textTour}>{item.tourDefault.tour_name}</Text>
            <Text style={styles.colorPrice}>{item.tourDefault.price} đ</Text>
          </View>
        </View>
      </TouchableOpacity>
      {tour && (
        <View style={styles.clickContainer}>
          <TouchableOpacity
            disabled={String(tour?.status) === 'finish' ? true : false}
            style={[styles.clickBlock,String(tour?.status) === 'finish' && styles.opacityClick ]}
            onPress={() => {
              if (String(tour?.status) === 'chờ xác nhận ') {
                console.log('1');
                confirmTour();
              } else if (String(tour?.status) === 'xác nhận') {
                console.log('2');
                finishTour();
              } else {
                return;
              }
            }}>
            <Text style={styles.colorClick}>
              {String(tour?.status) === 'chờ xác nhận '
                ? 'xác nhận'
                : String(tour?.status) === 'xác nhận'
                ? 'hoàn thành'
                : String(tour?.status) === 'finish'
                ? 'Tour kết thúc'
                : ''}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockHeader: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 12,
  },
  headerTitleContent: {
    color: 'black',
    // fontWeight: '700',
    marginLeft: 10,
  },
  containerContent: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 11,
  },
  contentLeft: {
    width: '70%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: 4,
  },
  contentRight: {
    width: '30%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
  sizeTitle: {
    fontSize: 11,
  },
  containerTour: {
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  textTour: {
    color: 'black',
  },
  Tourdetail: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    marginTop: 10,
  },
  blockTour: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tourLeft: {
    width: '30%',
    height: '100%',
  },
  tourRight: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 6,
  },
  fullwidth: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  colorPrice: {
    color: 'red',
  },
  clickContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  clickBlock: {
    width: 200,
    height: '100%',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5F24',
  },
  colorClick: {
    color: 'white',
  },
  opacityClick: {
    opacity: 0.8
  }
});

export default TourGuideDetail;
