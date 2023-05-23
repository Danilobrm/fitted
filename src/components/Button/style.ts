import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'center',
    width: '90%',
    height: 50,
    borderRadius: 10,
  },
  button: {
    backgroundColor: colors.pink,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

const buttonStyle = (disabled: boolean) =>
  StyleSheet.create({
    button: {
      backgroundColor: !disabled ? colors.pink : 'gray',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
  });

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
export {buttonStyle};
