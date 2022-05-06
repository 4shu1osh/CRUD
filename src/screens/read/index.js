import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReadAction from '../../redux/read/action';
import styles from './styles';
import axios from 'axios';

export default function Read({navigation}) {
  const listRef = useRef(null)
  const dispatch = useDispatch();
  const DATA = useSelector(store => store.ReadReducer.data);
  const start = useSelector(store => store.ReadReducer.start);
  const deleted = useSelector(store => store.ReadReducer.deleted);

  const onEndReached = () => {
    if(start <100){
      dispatch({type: 'PAGINATION', payload: start + 10})
    }
  };

  useEffect(() => {
console.log("deleted changed")
  }, [deleted])
  
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate('ShowPost', {item})
         axios.get(`https://jsonplaceholder.typicode.com/posts/${item.id}/comments`)
         .then((res)=> {
           console.log("comm---", res)
           dispatch({type: 'COMMENT', payload: res.data})
         })
        }}>
        <View style={styles.card}>
          <Image
          source={{uri: `https://picsum.photos/id/${item.id+100}/200/300`}}
          style={styles.post}
          />
          <Text style={styles.info}>{item.title}</Text>
        </View>
      </TouchableOpacity>)
     
  };

  useEffect(()=> {
    axios.get
  })

  useEffect(() => {
    dispatch(ReadAction(start));
  }, [start]);

  return (
    <View style={styles.container}>
      <FlatList
      ref={listRef}
        data={DATA}
        renderItem={renderItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listStyle}
      />

      <TouchableOpacity
        style={styles.img}
        onPress={() => navigation.navigate('Create')}>
        <Image
          source={require('../../assets/photos/plus.png')}
          style={styles.img}
        />
      </TouchableOpacity>

    </View>
  );
}
