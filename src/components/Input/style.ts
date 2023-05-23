import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 57,
    marginVertical: 10.5,
  },
  input: {
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    paddingLeft: 64,
    color: '#230A06',
  },
  placeholder: {
    width: 48,
    height: 45,
    backgroundColor: '#F679521A',
    zIndex: 1,
    borderRadius: 10,
    position: 'relative',
    marginLeft: 8,
    marginRight: 9,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const placeholderStyle = (display: 'flex' | 'none') =>
  StyleSheet.create({
    placeholderText: {
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      color: '#230A06',
      display: display,
    },
  });

//   borderColor: 'red',
//   borderWidth: 1,

export default style;
export {placeholderStyle};
