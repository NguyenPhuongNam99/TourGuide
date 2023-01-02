import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
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
                <View style={styles.headerLeft} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        height: 55,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
    },
    headerLeft: { width: '90%', height: '100%' },
    headerRight: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
    },
    bold: {
        fontWeight: 'bold',
    },
    containerSpecial: { width: '100%', marginTop: 15, paddingLeft: 10 },
    blockSpecial: {
        width: 200,
        height: 130,
        backgroundColor: 'green',
        borderRadius: 9,
        marginRight: 10,
    },
    listContainer: { width: '100%', height: '100%', marginTop: 10, paddingHorizontal: 9 },
    blockList: { width: '100%', height: 100, flexDirection: 'row', backgroundColor: 'white', borderRadius: 9, paddingHorizontal: 6 , marginTop: 10},
    listLeft: { width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    listRight: { width: '70%', height: '100%', flexDirection: 'column', justifyContent:'space-evenly', paddingLeft: 15 },
    imagelistleft: { width: '100%', height: '90%', borderRadius: 9 },
    fontSize: {
        fontSize: 12
    },
    title: {
        fontWeight: 'bold',
    }
});

export default Home;
