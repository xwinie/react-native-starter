import React, { Component } from 'react'
import {
    ScrollView,
    View,
    StyleSheet,
    Text
} from 'react-native'
import TopList from './TopList'

const Datas = {
    "data": [
        [{
            "title": "美食",
            "image": "ms"
        },
        {
            "title": "电影",
            "image": "dy"
        },
        {
            "title": "酒店",
            "image": "jd"
        },
        {
            "title": "休闲娱乐",
            "image": "xxyl"
        },
        {
            "title": "外卖",
            "image": "wm"
        },
        {
            "title": "自助餐",
            "image": "zzc"
        },
        {
            "title": "KTV",
            "image": "ktv"
        },
        {
            "title": "火车票机票",
            "image": "hcpjp"
        },
        {
            "title": "丽人",
            "image": "lr"
        },
        {
            "title": "周边游",
            "image": "zby"
        }
        ],
        [
            {
                "title": "足疗按摩",
                "image": "zlam"
            },
            {
                "title": "购物",
                "image": "gw"
            },
            {
                "title": "今日新单",
                "image": "jrxd"
            },
            {
                "title": "小吃快餐",
                "image": "xckc"
            },
            {
                "title": "生活服务",
                "image": "shfw"
            },
            {
                "title": "甜点饮品",
                "image": "tdyp"
            },
            {
                "title": "美甲",
                "image": "mj"
            },
            {
                "title": "景点门票",
                "image": "jdmp"
            },
            {
                "title": "旅游",
                "image": "ly"
            },
            {
                "title": "全部分类",
                "image": "qbfl"
            }]
    ]
}

const Data = Datas.data;

import Dimensions from 'Dimensions'
const { width } = Dimensions.get('window');

export default class IndexTop extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            curpage: 0
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e) => this.changePoint(e)}
                >
                    {this.renderView()}
                </ScrollView>
                <View style={styles.pointView}>
                    {this.statuspoint()}
                </View>

            </View>
        )
    }
    statuspoint() {
        let point: any = [];
        for (let i = 0; i < Data.length; i++) {
            let color = this.state.curpage == i ? { color: '#ef5000' } : { color: '#ccc' };
            point.push(
                <Text key={i} style={[styles.pointStyle, color]}>&bull;</Text>
            )
        }
        return point;
    }
    changePoint(e) {
        let off = e.nativeEvent.contentOffset.x;
        let curpage = Math.floor(off / width);
        this.setState({
            curpage: curpage
        });
    }
    renderView() {
        let allView: any = [];
        for (let i = 0; i < Data.length; i++) {
            allView.push(
                <TopList key={i} dataSource={Data[i]} />
            )
        }
        return allView;

    }
}
const styles = StyleSheet.create({
    pointStyle: {
        fontSize: 30
    },
    pointView: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 8,
        marginTop: 0
    },
    container: {
        backgroundColor: '#fff'
    }
});

