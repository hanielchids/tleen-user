import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    color: 'orange',
  },
  roundButton: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    shadowColor: '#4a4a4a',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  goButton: {
    position: 'absolute',
    backgroundColor: 'orange',
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    bottom: 110,
    left: Dimensions.get('window').width / 2 - 37,

    shadowColor: '#4a4a4a',
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  goText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  balanceButton: {
    position: 'absolute',
    backgroundColor: 'rgba(3, 9, 25, 0.5)', // #03091980;

    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    top: 10,
    left: Dimensions.get('window').width / 2 - 50,
  },
  balanceText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
  },
});

export default styles;
