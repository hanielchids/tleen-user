import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headingBox: {
    padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    marginBottom: 30,
  },
  backButton: {
    position: 'absolute',
    zIndex: 50,
    borderRadius: 50,
    padding: 3,
    marginTop: 8,
    marginLeft: 8,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0c4a6e',
    padding: 7,
    fontSize: 20,
    lineHeight: 22,
    marginLeft: 50,
    marginBottom: 15,
  },
  subtitles: {
    paddingLeft: 0,
    marginLeft: 5,
    textAlign: 'center',
    marginLeft: 30,
    color: '#9ca3af',
    fontSize: 13,
  },
  lineView: {
    backgroundColor: '#cbd5e1',
    height: 0.5,
  },
  pressableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
  },
  firstFlex: {
    alignContent: 'flex-start',
  },
  typeText: {
    marginLeft: 2,
    fontWeight: '300',
    color: '#374151',
    fontSize: 18,
  },
});

export default styles;
