import React, {Component} from 'react';
import { View , Text, StyleSheet} from 'react-native';
import {Header,Icon} from 'react-native-elements';

const MyHeader = props => {
    return(
        <Header
        centerComponent = {{text:props.title,  style:{color:'#98A5AE', fontSize:20, fontWeight:'bold', }}}
        backgroundColor = '#eafafe'
        />
    );
};

export default MyHeader;