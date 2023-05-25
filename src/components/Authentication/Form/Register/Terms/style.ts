import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  checkbox: {
    padding: 0,
    width: 13.33,
    height: 13.33,
    position: 'relative',
  },
  terms: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  termstext: {
    color: '#00000080',
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
  },
  termsMarked: {color: '#000000'},
});

export default style;
