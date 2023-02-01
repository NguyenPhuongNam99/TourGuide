import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {loginSchema} from '../../utils/Utils';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setData } from './loginSlice';
import { useAppDispatch } from '../../app/store';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const submit = async (values: any) => {
    try {
      const obj = {
        username: values.account,
        password: values.password,
      };
      const response: any = await axios.post(
        'http://206.189.37.26:8080/v1/auth/login',
        obj,
      );
      await AsyncStorage.setItem('@storage_Key', response.data.accesToken);
      dispatch(setData(response.data))

      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'This is some something 👋',
      });
      setTimeout(() => {
        navigation.navigate('StackHomeNavigation' as never);
      }, 900);
      console.log('response new', response);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={{
          uri: 'https://img.freepik.com/free-vector/travel-background-hand-drawn-style_23-2147768904.jpg?w=2000',
        }}
      />

      <View style={styles.headerContainer}>
        <View style={{zIndex: 99}}>
          <Toast />
        </View>

        <View style={styles.top} />
        <View style={styles.bottom}>
          <Formik
            initialValues={{account: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={values => {
              submit(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <>
                <Text style={styles.titleContainer}>Đăng nhập</Text>
                <View style={styles.containerInput}>
                  <Text style={styles.inputTitle}>Tài khoản</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập tài khoản"
                    onChangeText={handleChange('account')}
                    onBlur={handleBlur('account')}
                    value={values.account}
                  />
                </View>
                {errors.account && touched.account ? (
                  <Text style={styles.error}>{errors.account}</Text>
                ) : null}
                <View style={styles.containerInput}>
                  <Text style={styles.inputTitle}>Mật khẩu</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập mật khẩu"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                  />
                </View>
                {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
                <View style={styles.containerClick}>
                  <TouchableOpacity
                    style={styles.blockClick}
                    onPress={() => handleSubmit()}>
                    <Text style={{color: 'white'}}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default Login;
