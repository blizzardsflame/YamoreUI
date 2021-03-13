import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F0F2',
  },
  //Input Box
  inputBoxContainer: {
    backgroundColor: '#E9E9E9',
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
    fontWeight: '500',
    color: 'black',
  },
  //Home Destination
  iconContainerHome: {
    backgroundColor: '#5079D2',
    padding: 10,
    borderRadius: 25,
  },
  //Reward Bar
  rewardBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  rewardBarPoints: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardBarHub: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardBarText: {
    fontSize: 16,
  },
});

export default styles;
