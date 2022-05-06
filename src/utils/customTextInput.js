import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomTextInput(props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.label}
      onChangeText={props.onChangeText}
      placeholderTextColor="grey"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 16
  },
});
