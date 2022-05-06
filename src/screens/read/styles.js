import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 300,
    marginVertical: 16,
  },
  heading: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 24,
    marginVertical: 8,
    marginHorizontal: 16,
    position: 'absolute',
    color: 'white',
    padding: 16,
    shadowColor: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    justifyContent: 'center',
  },
  buttonView: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    height: 30,
    width: 60,
  },
  img: {
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 12,
  },
  delete: {
    height: 30,
    width: 30,
  },
  cardParent: {
    flexDirection: 'row',
  },
  post: {
    height: 300,
    width: '100%',
    marginVertical: 16,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 16,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#909090',
    marginVertical: 16,
  },
  dp: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  commentView: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  postDesc: {
    height: 100,
    width: 100,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  listStyle: {
      alignItems: 'center'
  }
});

export default styles;
