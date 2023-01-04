import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headingBox: {
    padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    marginBottom: 25,
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
    marginLeft: '45%',
    marginBottom: 10,
  },
  tabStyle: {
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  formLabel: {
    marginBottom: 5,
    marginTop: 30,
    fontWeight: '500',
  },
  placeholderText: {
    padding: 12,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    width: '49%',
  },
  button: {
    backgroundColor: '#FF6600',
    marginTop: 100,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
