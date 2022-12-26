import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headingBox: {
    padding: 5,
    paddingBottom: 0,
    marginTop: -10,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'blue', //Will change tailwind-sky-900
    padding: 7,
    fontSize: 24,
  },
  promoBox: {
    flexDirection: 'row',
    paddingVertical: 3,
    paddingRight: 8,
    paddingLeft: 0,
    marginLeft: 6,
    backgroundColor: 'teal', //bg-teal-900
    height: '64%',
    width: '95%',
    borderRadius: 10,
  },
  commissionText: {
    fontSize: 18,
    paddingLeft: 0,
    color: '#fff',
    marginLeft: 10,
    marginTop: 2,
    textAlign: 'left',
  },
  refferalCode: {
    marginTop: 8,
    marginLeft: 10,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddding: 5,
    paddingTop: 1,
    paddingLeft: 0,
  },
  forminput: {
    borderColor: '#EBEBEB',
    borderRightColor: '#004D40',
    borderTopColor: '#004D40',
    borderLeftColor: '#004D40',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    minWidth: 200,
    height: 50,
    margin: 20,
    marginTop: 1,
  },
});

export default styles;
