import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AppIonicons from '../../components/icon/AppIonicons';

const TourGuideDetail = ({route}) => {
  const {item} = route.params;
  console.log('itemtt', item);
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <View style={styles.blockHeader}>
          <AppIonicons name="arrow-back" size={18} />
          <Text style={styles.headerTitleContent}>Chi tiết chuyến đi</Text>
        </View>
      </View>

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

      <TouchableOpacity style={styles.Tourdetail}>
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
      <View style={styles.clickContainer}>
        <TouchableOpacity style={styles.clickBlock}>
          <Text style={styles.colorClick}>Xác nhận Tour</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 50
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
    color: 'white'
  }
});

export default TourGuideDetail;
