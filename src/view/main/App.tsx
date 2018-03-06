import React from 'react';
import { View, Text } from 'react-native';
import { TabBar, SearchBar } from 'antd-mobile';
import Main from './Main'
export default class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
    }

    renderContent(pageText) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <SearchBar
                    placeholder="Search"
                    showCancelButton
                />
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#ccc"
            >
                <TabBar.Item
                    title="Life"
                    icon={require('../../images/alipay.png')}
                    selectedIcon={require('../../images/alipay_sel.png')}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.onChangeTab('blueTab')}
                >
                    {this.renderContent('blueTab')}
                </TabBar.Item>
                <TabBar.Item
                    title="Koubei"
                    badge={2}
                    icon={require('../../images/koubei.png')}
                    selectedIcon={require('../../images/koubei_sel.png')}

                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => this.onChangeTab('redTab')}
                >
                    <Main />
                </TabBar.Item>
                <TabBar.Item
                    title="Friend"
                    icon={require('../../images/friend.png')}
                    selectedIcon={require('../../images/friend_sel.png')}

                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => this.onChangeTab('greenTab')}
                >
                    {this.renderContent('Friend Tab')}
                </TabBar.Item>
                <TabBar.Item
                    title="My"
                    icon={require('../../images/busi.png')}
                    selectedIcon={require('../../images/busi_sel.png')}

                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.onChangeTab('yellowTab')}
                >
                    {this.renderContent('My Tab')}
                </TabBar.Item>
            </TabBar>
        );
    }

}