import * as React from 'react';
import { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { db } from "../firebase/config";
import * as firebase from 'firebase';

let addItem =(name) => {
  db.ref("/Professional").push({
    name,
}); 
};

export default class  HomeScreen extends Component {
  state ={
    name:"",
  }

  handleChange = (e) => {
    this.setState ({
      name: e.nativeEvent.text,
    });
  };


    render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TextInput  placeholder = "Name" onChangeText = {(name) => this.setState({name})} />
        <Button  onPress={ () => addItem(this.state.name)}>
          <Text>add</Text>
        </Button>
      </View>
    );
    }
  }