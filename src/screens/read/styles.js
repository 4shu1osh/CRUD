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
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center'
  },
  buttonView: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
    height: 30,
    width: 130,
    justifyContent: 'center'
  },
  img: {
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 12,
    right: 6,
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
    backgroundColor: '#424242'
  },
  text: {
    fontSize: 16,
    color: 'white',
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
  },
  cardContainer: {
      flexDirection: 'row'
  },
  btnView: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 16
  },
  icon: {
      marginVertical: 16,
      alignSelf: 'center',
      height: 30,
      width: 30,
  },
  input: {
    borderWidth: 1,
    padding: 20,
    marginVertical: 16,
    width: 250,
    height: 80,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 20
  },
  commentsWrap: {
    marginVertical:30,
    marginHorizontal: 20
  }
});

export default styles;
