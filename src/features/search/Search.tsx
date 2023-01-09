import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,KeyboardAvoidingView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Search = () => {
  const data = [
    {
      id: '1',
      name: 'Nguyen Van A',
      checked: false,
    },
    {
      id: '2',
      name: 'Pham Van B',
      checked: false,
    },
    {
      id: '3',
      name: 'Dao Van Cs',
      checked: true,
    },
  ];
  const [dataFormat, setDataFormat] = useState(data);
  const [valueInput, setValueInput] = useState('');

  const searchDatas = value => {
    const responsearch = dataFormat.filter(item => {
      if (String(item.name).includes(value)) {
        return item;
      }
    });
    if (responsearch.length > 0) {
      setDataFormat(responsearch);
    }
    if (String(value) === '') {
      setDataFormat(data);
    }
    setValueInput(value);
  };

  const handleToggle = (id: any) => {
    // console.log('id', id);
    // const value = data.map(item => {
    //   if (Number(item.id) === Number(id)) {
    //     console.log('itemmm', item.checked);
    //     return {
    //       ...item,
    //       checked: false,
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    // console.log('value', value);
    const cloneData = [...dataFormat];
    setDataFormat(
      cloneData.map(item =>
        Number(item.id) === Number(id)
          ? {...item, checked: !item.checked}
          : item,
      ),
    );
  };

  const checkedAll = () => {
    setDataFormat(dataFormat.map(item => ({...item, checked: true})));
  };

  const filerName = dataFormat.filter(item => item.checked);

  return (
      <View style={styles.container}>
        <View style={styles.bockContainer}>
          <View style={styles.top}>
            <TextInput
              style={styles.input}
              placeholder="Tìm kiếm"
              value={valueInput}
              onChangeText={text => searchDatas(text)}
            />
          </View>
          <View style={styles.bottom}>
            <View style={styles.blockBottom}>
              <View style={styles.topList}>
                <View style={styles.list}>
                  <FlatList
                    style={styles.flatlist}
                    data={dataFormat}
                    extraData={handleToggle}
                    renderItem={({item}) => {
                      return (
                        <View style={styles.blockCheckbox} key={item.id}>
                          <CheckBox
                            disabled={false}
                            value={item.checked}
                            onChange={() => handleToggle(item.id)}
                          />
                          <Text>{item.name}</Text>
                        </View>
                      );
                    }}
                  />
                </View>
                <View style={styles.clickAll}>
                  <TouchableOpacity
                    style={styles.clickAllContainer}
                    onPress={checkedAll}>
                    <Text>Chon Tat Ca</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottomName}>
                {filerName?.map(item => {
                  return <Text style={{paddingRight: 5}}>{item.name}, </Text>;
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bockContainer: {
    width: '85%',
    height: '85%',
    borderWidth: 1,
    borderColor: 'green',
  },
  top: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'green',
    borderWidth: 1,
    width: '80%',
    height: 35,
    borderRadius: 8,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
  },
  bottom: {
    width: '100%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockBottom: {
    width: '90%',
    height: '90%',
    borderWidth: 1,
    borderColor: 'green',
  },
  topList: {width: '100%', height: '85%'},
  bottomName: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'green',
    borderTopWidth: 1,
  },
  list: {
    width: '100%',
    height: '80%',
    paddingHorizontal: 10,
  },
  clickAll: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickAllContainer: {
    width: 150,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'green',
  },
  blockCheckbox: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'green',
  },
  flatlist: {width: '100%', height: '100%'},
});
export default Search;
