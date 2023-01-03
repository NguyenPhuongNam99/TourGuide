import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {SignupSchema} from '../../utils/Utils';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import { styles } from './styles';

const SignUp = () => {
  const navigation = useNavigation();

  const submit = async values => {
    try {
      const obj = {
        username: values.account,
        email: values.email,
        password: values.password,
        first_name: '',
        last_name: '',
        gender: true,
        phone_number: '',
        avatar_url: '',
        role: 'hdv',
        status: 'not-available',
      };

      const response = await axios.post(
        'http://206.189.37.26:8080/v1/auth/register',
        obj,
      );
      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'Đăng ký thành công 👋',
      });
      setTimeout(() => {
        navigation.navigate('Login' as never);
      }, 1000);
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
            initialValues={{email: '', account: '', password: ''}}
            validationSchema={SignupSchema}
            onSubmit={values => {
              console.log('values', values);
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
                <Text style={styles.titleContainer}>Tạo tài khoản</Text>
                <View style={styles.containerInput}>
                  <Text style={styles.inputTitle}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}

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
                  />
                </View>
                {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}

                <View style={styles.containerClick}>
                  <TouchableOpacity
                    style={styles.blockClick}
                    onPress={() => handleSubmit()}>
                    <Text style={{color: 'white'}}>Sign Up</Text>
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



export default SignUp;
