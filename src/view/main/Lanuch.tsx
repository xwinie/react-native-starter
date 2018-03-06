import React, { Component } from 'react'
import {
    View,
    Image,
    StatusBar
} from 'react-native'

export default class Lanuch extends Component<any, any>  {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    hidden={true}
                />
                <Image source={{ uri: 'launchimage' }} style={{ flex: 1 }} />
            </View>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            // push("/")
        }, 3000)
    }
}