import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { useAppSelector } from '../../app/store';
import axios from 'axios';

const Home = () => {
    const value: any = useAppSelector((state) => state.loginSlice.data);
    const submit = async () => {
        try {
            const token = await AsyncStorage.getItem('@storage_Key');

            let config = {
                headers: {
                    Authorization: "Bearer " + token,
                },
            };
            const response = await axios.get(`http://206.189.37.26:8080/v1/orderTour/getOrderTourOfIdHDV/${value._id}`, config);

            console.log('response', response.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        submit()
    }, [])


    const data = [
        {
            id: '1',
            image:
                'https://img.freepik.com/free-vector/taiwan-map-with-landmarks_23-2148634533.jpg?w=740&t=st=1672632127~exp=1672632727~hmac=d6e939995c92b924210a028dd74a304376461627da1d8112c45b685507d8dbd2',
        },

        {
            id: '3',
            image:
                'https://img.freepik.com/free-psd/3d-illustration-cartoon-character-young-traveller-man-searching-location-map-during-travel-summer-vacation_1150-52366.jpg?w=996&t=st=1672647804~exp=1672648404~hmac=867d81527bcedc3e9d63a0aa971595e3803bb0ade6cc8ea13566c26cdf92e598',
        },
        {
            id: '2',
            image:
                'https://img.freepik.com/premium-photo/asian-couple-hat-with-suitcase-bag-backpack-standing-street_9083-3307.jpg?w=1380',
        },
    ];

    const dataList = [
        {
            id: '1',
            image: 'https://nhaxinhplaza.vn/wp-content/uploads/nen-di-trang-an-co-hay-moi.jpg',
            tourName: 'Trang an',
            price: '2000',
            place: 'Bai Dinh'
        },
        {
            id: '2',
            image: 'https://thanhlamhotspring.com/wp-content/uploads/2015/02/Canh-dep-ha-giang-0001.jpg',
            tourName: 'HA giangn',
            price: '2000',
            place: 'Bai Dinh'
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>

                </View>
                <View style={styles.headerRight}>
                    <Icon name="rocket" size={30} color="#900" />
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.bold}>Địa điểm nổi bật</Text>
                <Text>xem thêm ></Text>
            </View>

            <View style={styles.containerSpecial}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.blockSpecial}>
                                <Image
                                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                                    source={{
                                        uri: item.image,
                                    }}
                                />
                            </View>
                        );
                    }}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.bold}>Danh sách tour cho bạn</Text>
                {/* <Text>xem thêm ></Text> */}
            </View>

            <View style={styles.listContainer}>
                <FlatList data={dataList} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.blockList}>
                            <View style={styles.listLeft}>
                                <Image
                                    style={styles.imagelistleft}
                                    source={{
                                        uri: item.image
                                    }}
                                />
                            </View>
                            <View style={styles.listRight}>
                                <Text style={styles.bold}>{item.tourName}</Text>
                                <Text style={styles.fontSize}>{item.place}</Text>
                                <Text style={styles.fontSize}>{item.price}</Text>
                            </View>
                        </TouchableOpacity>

                    )
                }} />
            </View>
        </View>
    );
};


export default Home;
