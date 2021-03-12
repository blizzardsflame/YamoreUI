import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
  },
  //Input Box
  inputBoxContainer: {
    backgroundColor: '#E9E6E8',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  inputBoxText: {
    fontSize: 20,
    color: 'black',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
  },
  //Previous Destination
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
  },
  iconContainerRecent: {
    backgroundColor: '#A3A0A3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontSize: 16,
  },
  //Home Destination
  iconContainerHome: {
    backgroundColor: '#5079D2',
    padding: 10,
    borderRadius: 25,
  },
});

export default styles;
