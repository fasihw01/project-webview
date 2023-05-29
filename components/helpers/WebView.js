import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
const MyWebComponent = ({route,navigation}) => {
 
  const {productLink}=route.params;
  console.log(productLink);
  return <WebView source={{ uri: productLink }} style={{ flex: 1 }} />;
}

export default MyWebComponent;