import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginLeft: 6,
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
