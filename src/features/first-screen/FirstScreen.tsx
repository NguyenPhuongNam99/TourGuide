import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.container}
        resizeMode="cover"
        source={{
          uri: 'https://img.freepik.com/free-vector/travel-background-hand-drawn-style_23-2147768904.jpg?w=2000',
        }}
      />
      <View style={styles.containerClick}>
        <View style={styles.clickleft} />
        <View style={styles.clickRight}>
          <TouchableOpacity
            style={styles.clickFirst}
            onPress={() => navigation.navigate('Login' as never)}>
            <Text style={styles.colorWhite}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clickSecond}
            onPress={() => navigation.navigate('SignUp' as never)}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerClick: {
    width: '100%',
    height: 130,
    position: 'absolute',
    bottom: 50,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clickleft: {width: '45%', height: '100%'},
  clickRight: {
    width: '55%',
    height: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  clickFirst: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF5F24',
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  colorWhite: {
    color: 'white',
  },
  clickSecond: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#FF5F24',
  },
});

export default FirstScreen;
