import Dimensions from 'Dimensions'
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
const { width } = Dimensions.get('window');
import RightCell from './RightCell'
const MiddleData = {
    "dataLeft": [
        { "img1": "mdqg", "img2": "yyms", "title": "探路组碳烤鱼", "price": "¥9.5", "sale": "再减3元" }
    ],
    "dataRight": [
        { "title": "天天特价", "subTitle": "特惠不打烊", "rightImage": "tttj", "titleColor": "orange" },
        { "title": "一元吃", "subTitle": "一元吃美食", "rightImage": "yyms", "titleColor": "red" }
    ]
}

export default class TopMiddle extends Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                {this.renderleft()}
                <View>
                    {this.renderright()}
                </View>

            </View>
        )
    }
    renderright() {
        let rightView: any = [];
        let dataRight = MiddleData.dataRight;
        for (let i = 0; i < dataRight.length; i++) {
            rightView.push(
                <RightCell isPlay={true} data={dataRight[i]} key={i + 'ls'} />
            )
        }
        return rightView;
    }
    renderleft() {
        let leftView: any = [];
        let dataLeft = MiddleData.dataLeft;
        for (let i = 0; i < dataLeft.length; i++) {
            leftView.push(
                <TouchableOpacity key={i} >
                    <View style={styles.left}>
                        <Image source={{ uri: dataLeft[i].img1 }} style={styles.leftImg} />
                        <Image source={{ uri: dataLeft[i].img2 }} style={styles.rightImg} />
                        <Text>{dataLeft[i].title}</Text>
                        <View style={styles.bottomView}>
                            <Text style={styles.bottomleft}>{dataLeft[i].price}</Text>
                            <Text style={styles.bottomright}>{dataLeft[i].sale}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            )
        }
        return leftView;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        width: width,
        backgroundColor: '#fff'
    },
    left: {
        padding: 5,
        borderRightWidth: 0.5,
        borderRightColor: '#ccc',
        backgroundColor: '#fff',
        width: width / 2,
        alignItems: 'center'
    },
    leftImg: {
        width: 80,
        height: 25
    },
    rightImg: {
        width: 80,
        height: 50
    },
    bottomView: {
        flexDirection: 'row',

    },
    bottomleft: {
        fontSize: 12,
        color: '#7ec7b6'
    },
    bottomright: {
        fontSize: 8,
        color: '#cc0000',
        backgroundColor: '#fcf34a',
        borderRadius: 4,
        marginLeft: 2,
        paddingTop: 2,
        alignSelf: 'flex-start'
    }
});