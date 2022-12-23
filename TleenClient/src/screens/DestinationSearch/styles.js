import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 25,
    borderRadius: 15,
    left: 15,
  },
  line: {
    width: 1,
    height: 35,
    backgroundColor: 'green',
    position: 'absolute',
    top: 35,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'green',
    position: 'absolute',
    top: 75,
    left: 15,
  },
});

export default styles;
