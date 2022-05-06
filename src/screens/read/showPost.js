import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

export default function ShowPost({route, navigation}) {
  const DATA = useSelector(store => store.ReadReducer.data);
  const comments = useSelector(store => store.ReadReducer.comments);
  console.log("comments", comments)
  const dispatch = useDispatch();
  const {item} = route.params;

  const renderItem = item => {
    return (
      <View style={styles.commentView}>
          <Image
          source= {{uri: `https://picsum.photos/id/${item.item.id}/200/300`}}
          style={styles.dp}
          />
        <View>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>{item.item.email}</Text>
        <Text style={styles.text}>{item.item.name}</Text>
        </View>
      </View>
    );
  };

  const ItemSeparatorComponent = () => {
      return(
          <View style={styles.separator}/>
      )
  }

  const onPressDelete = () => {
    const newData = DATA.filter(ele => ele.id != item.id);
    dispatch({type: 'DELETE', payload: newData});
    navigation.navigate('Read');
  };
  const onPressEdit = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/1`, {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(res => console.log('edit console', res));
  };
  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={onPressDelete}>
          <View style={[styles.buttonView, {borderColor: 'red'}]}>
            <Text>{'Delete'}</Text>
          </View>
        </TouchableOpacity>
      <View style={[styles.card, {flexDirection: 'row', alignItems: 'center'}]}>
       
        <Image
          source={{uri: `https://picsum.photos/id/${item.id+100}/200/300`}}
          style={styles.postDesc}
        />
        <Text style={[styles.text, {marginHorizontal: 8}]}>{item.title}</Text>
      </View>
      <FlatList
        data={comments}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
      {/* <TouchableOpacity onPress={onPressEdit}>
        <View style={[styles.buttonView, {borderColor: 'green'}]}>
          <Text>{'Edit'}</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
}
