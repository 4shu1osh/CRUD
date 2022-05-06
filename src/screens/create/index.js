import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import CreateAction from '../../redux/create/action';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';


export default function Create({navigation}) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  
  const onChangeTitle = text => {
    setTitle(text);
  };
  const onChangeBody = text => {
    setBody(text);
  };
  const onChangeUserId = text => {
    setUserId(text);
  };

  const onPress = () => {      
      dispatch(CreateAction(title, body, userId))
      navigation.navigate('Read')
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        placeholder={'Title'}
        onChangeText={onChangeTitle}
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.input}
        placeholder={'Body'}
        onChangeText={onChangeBody}
        placeholderTextColor="grey"
      />
      <TextInput
        style={styles.input}
        placeholder={'UserId'}
        onChangeText={onChangeUserId}
        placeholderTextColor="grey"
      />
      <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonView, {borderColor: 'green'}]}>
        <Text style={styles.info}>{'ADD'}</Text>
      </View>
      </TouchableOpacity>
   
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 16,
    width: 200
  },
});
