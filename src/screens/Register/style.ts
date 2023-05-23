import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFD',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    display: 'flex',
    alignSelf: 'center',
    marginVertical: 28,
  },
  screenName: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#230A06',
    alignSelf: 'center',
    marginBottom: 26,
  },
  errors: {
    width: '80%',
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'left',
    position: 'relative',
    top: -10,
  },
  errorsText: {
    width: '100%',
    color: 'red',
  },
  terms: {
    color: '#00000080',
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 40,
  },
  termsMarked: {color: '#000000'},
});

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
