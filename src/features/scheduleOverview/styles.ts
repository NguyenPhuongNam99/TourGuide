import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeView: {backgroundColor: 'white'},
  imageBlock: {width: '100%', height: 140, backgroundColor: 'yellow'},
  fullwidth: {width: '100%', height: '100%'},
  backgroundBlur: {width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top: 0, left: 0},
  timeFormat: {position: 'absolute', top: '50%',left: '25%', color: 'white', zIndex: 99},
  avatar: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: -20,
    left: '43%',
  },
  bold: {
    fontWeight: 'bold',
  },
  titleAvatar: {marginTop: 25, justifyContent: 'center', alignItems: 'center'},
  blockMenuIcon: {
    width: '100%',
    height: 40,
    marginTop: 16,
    marginLeft: 16,
  },
  menuClick: {
    width: 85,
    height: 30,
    backgroundColor: '#ECF1FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  planContainer: {
    width: '100%',
    height: 240,
    marginTop: 16,
    marginLeft: 16,
  },
  blockviewPlan: {
    width: 150,
    height: '100%',
    marginRight: 16,
  },
  viewPlan: {width: 150, height: 200},
  back: {position: 'absolute', top: '20%', left: 10},
  viewTitleBlock: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 40,
  },
  colorDestination: {
    color: '#969696',
  },
  margin: {
    marginTop: 16,
    marginLeft: 16,
  },
  blockSubmit: {
    position: 'absolute',
    width: '100%',
    height: 60,
    bottom: 0,
    left: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  leftSubmit: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  colorLeftSubmit: {color: '#FF5F24', fontSize: 16},
  rightSubmit: {
    width: '40%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightClick: {
    width: 92,
    height: 30,
    backgroundColor: '#FF5F24',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorWhite: {
    color: 'white',
  },
});
