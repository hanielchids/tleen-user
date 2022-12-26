import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headingBox: {
    padding: 5,
    paddingBottom: 0,
    marginTop: -10,
  },
  backButton: {
    position: 'absolute',
    top: 3,
    zIndex: 50,
    left: -5,
    marginTop: 1,
    padding: 3,
    borderRadius: 50,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'blue', //Will change tailwind-sky-900
    padding: 7,
    fontSize: 24,
  },
  subtitles: {
    paddingLeft: 0,
    marginLeft: 5,
    textAlign: 'center',
    color: 'gray', //will change to tailwind-gray-400
    fontSize: 15,
  },
  lineView: {
    backgroundColor: 'gray', //bg-gray-300
    height: 0.5,
  },
  pressableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  firstFlex: {
    alignContent: 'flex-start',
  },
  typeText: {
    marginLeft: 2,
    fontWeight: '200',
    color: 'gray', //text-gray-700
    fontSize: 24,
  },
});

export default styles;
