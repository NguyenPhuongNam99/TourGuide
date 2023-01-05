import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIonicons from '../../components/icon/AppIonicons';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RenderHtml from 'react-native-render-html';

const TourOrdeDtail = ({route}) => {
  const navigation = useNavigation();
  const {item} = route?.params;

  const source = {
    html: `
${item?.tourDefault?.description}`,
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 50}}>
          <View style={styles.blockImageContainer}>
            <Image
              source={{uri: item.tourDefault.thumbnail[0].url}}
              resizeMode="cover"
              style={styles.fullWidth}
            />
            <View style={styles.viewPosition}>
              <Text style={styles.headerPosition}>{item.tourDefault.tourName}</Text>
              <Text style={styles.colorWhite}>
                <AppIonicons name="ios-location-outline" size={15} />
                {item.cityName}
              </Text>
            </View>
            <AppIonicons
              name="arrow-back-outline"
              size={20}
              color={'white'}
              style={styles.iconBack}
              onPress={() => navigation.goBack()}
            />
            <View style={styles.backgroundPosition} />
          </View>

          {item.visitLocation.lat && item.visitLocation.lng && (
            <View style={styles.blockMap}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{
                  ...StyleSheet.absoluteFillObject,
                }}
                region={{
                  latitude: Number(item.visitLocation.lat),
                  longitude: Number(item.visitLocation.lng),
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker
                  coordinate={{
                    latitude: Number(item.visitLocation.lat),
                    longitude: Number(item.visitLocation.lng),
                  }}
                />
              </MapView>
            </View>
          )}

          <View style={styles.blockImage}>
            <View style={styles.blockItem}>
              <Image
                source={{uri: item.tourDefault.thumbnail[1].url}}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
            <View style={styles.blockItem}>
              <Image
                source={{uri: item.tourDefault.thumbnail[2].url}}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
            <View style={styles.blockItem}>
              <Image
                source={{uri: item.tourDefault.thumbnail[3].url}}
                resizeMode="cover"
                style={styles.fullWidth}
              />
            </View>
          </View>

          <View style={styles.viewText}>
            <RenderHtml contentWidth={200} source={source} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.blockSubmit}>
        <View style={styles.leftSubmit}>
          <Text style={styles.colorLeftSubmit}>{item.tourDefault.price} d/ nguoi</Text>
        </View>
        <View style={styles.rightSubmit}>
          <TouchableOpacity
            style={styles.rightClick}
            onPress={() => {
              navigation.navigate(
                'ScheduleOverview' as never,
                {item: item} as never,
              );
            }}>
            <Text style={styles.colorWhite}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TourOrdeDtail;
