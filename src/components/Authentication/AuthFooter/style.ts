import {StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignSelf: 'center',
  },
  footer: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  footerClickable: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.pink,
  },
});

export default style;
