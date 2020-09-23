import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';











export default class ItemComponent extends Component {
  static propTypes = {
    professional: PropTypes.array.isRequired
  };

  render() {
    return (
      <View >
        {this.props.professional.map((professional, index) => {
          return (
            <View key={index}>
              <Text >{professional.name}</Text>
              
            </View>
          );
        })}
      </View>
    );
  }
}