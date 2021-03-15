import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContianer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContianer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default styles;
