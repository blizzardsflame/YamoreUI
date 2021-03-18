import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    marginLeft: 20,
  },
  textInput: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  //PlaceRow styling
  listView: {
    position: 'absolute',
    top: 115,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#A3A0A3',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  //Small Side Bar
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 15,
    left: -15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 60,
    backgroundColor: '#A3A0A3',
    position: 'absolute',
    top: 20,
    left: -13,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: -15,
  },
});
export default styles;
