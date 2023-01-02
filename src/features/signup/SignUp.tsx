import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {SignupSchema} from '../../utils/Utils';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const SignUp = () => {
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
        status: 'available',
      };

      const response = await axios.post(
        'http://206.189.37.26:8080/v1/auth/register',
        obj,
      );
      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'This is some something 👋',
      });
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
  headerContainer: {
    width: '100%',
    height: '100%',
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  top: {width: '100%', height: '30%'},
  bottom: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 10,
  },
  titleContainer: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 20,
    marginLeft: 10,
    color: 'black',
  },
  containerInput: {width: '100%', marginTop: 10},
  inputTitle: {paddingLeft: 4, color: 'black'},
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#D8D8D8',
    marginTop: 3,
    paddingLeft: 9,
  },
  containerClick: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  blockClick: {
    width: 160,
    height: 40,
    backgroundColor: '#FF5F24',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  error: {color: 'red', marginTop: 3, paddingLeft: 4},
});

export default SignUp;
