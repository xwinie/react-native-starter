import React from 'react';
import { ScrollView, View } from 'react-native';
import { SearchBar, Grid } from 'antd-mobile';
const data1 = Array.from(new Array(2)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `bar${i}`,
    url: `u${i}`,
}));
const data = Array.from(new Array(30)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `Name${i}`,
    url: `u${i}`,
}));


export default class Main extends React.Component<any, any> {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                    <SearchBar
                        placeholder="Search"
                        showCancelButton
                    />
                </View>
                <Grid data={data1} columnNum={1} carouselMaxRow={1} isCarousel onClick={(_el: any, index) => alert(_el.url)} />
                <Grid data={data} columnNum={5} isCarousel onClick={(_el: any, index) => alert(_el.url)} />
            </ScrollView>
        );
    }
}