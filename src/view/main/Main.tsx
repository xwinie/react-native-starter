import React from 'react';
import { ScrollView, View } from 'react-native';
import { SearchBar, Grid } from 'antd-mobile';
import TopMiddle from './TopMiddle'

const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `Name${i}`,
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
                <Grid data={data} columnNum={4} hasLine={false} isCarousel onClick={(_el, index) => alert(index)} />
                <TopMiddle />
            </ScrollView>
        );
    }
}