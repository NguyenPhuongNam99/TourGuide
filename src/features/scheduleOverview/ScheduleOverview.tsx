import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScheduleOverview = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [timeData, setTimeData] = useState<any>([]);
  const [indexData, setIndexData] = useState(0);

  const getTimeLine = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');

      const response = await axios.get(
        `http://206.189.37.26:8080/v1/tourSchedule/getTourScheduleID/${item.tourDefault.idTour}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );

      console.log('response tour now', response.data);
      setTimeData(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  console.log('timeeee', timeData[0]);

  useEffect(() => {
    getTimeLine();
  }, []);
    const formatTime = timeData.length > 0 && timeData?.map(itemTime => itemTime.day);
    console.log('format', formatTime);
  //   const [indexData, setIndexData] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.imageBlock}>
        <Image
          source={{uri: item.tourDefault.thumbnail[0].url}}
          resizeMode="cover"
          style={styles.fullwidth}
        />
        <View style={styles.backgroundBlur} />
        <Text style={styles.timeFormat}>
          {timeData && formatTime[0] + '  đến  ' + formatTime[formatTime.length - 1]}
        </Text>
        <AppIonicons
          name="chevron-back-outline"
          size={20}
          color={'white'}
          style={styles.back}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={{width: '100%', height: 60, paddingLeft: 14}}>
        <FlatList
          data={timeData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setIndexData(index)}
                style={{
                  width: 80,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Text>Ngày {index}</Text>
                <Text style={{color: 'black'}}>{item.day}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {timeData.length > 0 && (
        <View
          style={{
            width: '100%',
            height: '100%',
            marginTop: 10,
            paddingHorizontal: 14,
          }}>
          <FlatList
            data={timeData[indexData].schedule}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 60,

                    borderRadius: 6,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 25,
                  }}>
                  <View
                    style={{
                      width: '5%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>
                      {index}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '95%',
                      height: '100%',
                      flexDirection: 'row',
                      backgroundColor: 'white',
                      borderRadius: 6,
                    }}>
                    <View
                      style={{
                        width: '30%',
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'black',
                          borderRadius: 6,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: '70%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: 10,
                      }}>
                      <Text style={{color: 'black'}}>{item.location}</Text>
                      <Text numberOfLines={1} style={{color: 'black'}}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ScheduleOverview;
