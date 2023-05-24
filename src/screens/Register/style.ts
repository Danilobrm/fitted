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
  login: {
    display: 'flex',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 150,
    alignSelf: 'center',
  },
  loginClickable: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.pink,
  },
});

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
