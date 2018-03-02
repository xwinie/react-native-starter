import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';


export default class Back extends Component<any, any> {
    render() {
        return (
            <Image style={styles.picture} source={require('../images/wallpaper.png')}>
                {this.props.children}
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: 0,
        height: 0,
        resizeMode: 'cover',
    }
});