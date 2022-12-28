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
    marginLeft: '5%',
    marginBottom: 10,
  },
  subtitles: {
    paddingLeft: 0,
    marginLeft: 10,
    textAlign: 'center',
    marginRight: 5,
    color: '#9ca3af',
    fontSize: 13,
  },
  messageIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 1,
    paddingLeft: 0,
    marginTop: 150,
    height: '30%',
  },
  messageIcon: {
    marginLeft: '40%',
    marginTop: 10,
  },
  startChatButton: {
    marginTop: 180,
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    backgroundColor: '#0c4a6e',
  },
  chatButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
