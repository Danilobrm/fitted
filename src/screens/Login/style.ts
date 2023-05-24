import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  register: {
    display: 'flex',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 232.82,
    alignSelf: 'center',
  },
  registerClickable: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.pink,
  },
  forgotPassword: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#230A06',
    width: '90%',
    alignSelf: 'center',
    textAlign: 'right',
    paddingVertical: 18,
  },
});

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
