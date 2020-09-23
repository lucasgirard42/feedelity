import * as React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
import { db } from "../firebase/config";

let proffessionalRef = db.ref('/Professional');




export default class SettingsScreen extends Component {
  state= {
    professional: []
  };

  componentDimount(){
    proffessionalRef.on('value', snapshot => {
      let data = snapshot.val();
      let professional = Object.values(data);
      this.setState({ professional });
    })
  }

  
  render (){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.state.professional.length > 0 ? (
          <ItemComponent professional={this.state.professional} />
        ) : (
          <Text>No items</Text>
        )}
      </View>
    );
   }
  }