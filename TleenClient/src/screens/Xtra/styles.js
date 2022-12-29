import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  renderButton: {
    paddingRight: 4,
    paddingLeft: 10,
    marginLeft: 10,
    height: '95%',
    paddingBottom: 10,
    marginBottom: 15,
    paddingTop: 4,
    borderRadius: 5,
    boxShadow: '2px 2px solid gray',
    margin: 4,
    width: '45%',
  },
  cardBox: {
    padding: 15,
    paddingBottom: 0,
    marginTop: -10,
  },
  backButton: {
    position: 'absolute',
    // zIndex: 50,
    borderRadius: 50,
    padding: 3,
    marginTop: 8,
    marginLeft: 8,
  },
  xtraText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#0c4a6e', //sky-900
    paddingTop: 10,
    paddingBottom: 0,
    fontSize: 20,
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 0,
    marginLeft: 10,
  },
  addCardText: {
    fontWeight: '400',
    fontSize: 20,
  },
  addCardSubtext: {
    color: '#6b7280', //gray-500
  },
  viewItem: {
    paddingRight: 10,
    paddingLeft: 8,
    height: '30%',
    paddingBottom: 2,
    paddingTop: 8,
    borderRadius: 5,
    shadowColor: '#000',
    width: '100%',
  },
  activeText: {
    fontSize: 32,
    marginLeft: 10,
  },
  activeCardContainer: {
    paddingRight: 4,
    paddingLeft: 0,
    height: 150,
    // paddingBottom: 10,
    paddingTop: 8,
    marginTop: 10,
    borderRadius: 5,
    shadowColor: '#000',
    width: 150,
    backgroundColor: '#fff',
  },
  activeCardText: {
    fontSize: 22,
    marginLeft: 15,
    width: 180,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    height: '70%',
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#08668C',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: 100,
    marginTop: 90,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
