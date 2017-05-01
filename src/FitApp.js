// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from 'react-native';

var React = require('react');
var ReactNative = require('react-native');

export default class AwesomeProject extends React.Component {
	clickMe() {
    	alert('Hi!');
  	}
	render() {
	    return <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld,
        }}/>;
  	}
}

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

ReactNative.AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);