import { inject, observer } from "mobx-react";
import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import {
    InputItem, List, WingBlank, Button, Toast
} from "antd-mobile";
import { RouteComponentProps, withRouter } from "react-router";


import { LoginView } from "../../stores/models/login";

interface LoginProps {
    login?: LoginView
}

@inject('login')
@observer
class Login extends React.Component<LoginProps & RouteComponentProps<{}>, {}> {

    changePhone(e) {
        const login = this.props.login as LoginView;
        login.userNameAction(e)
    }
    changePwd(e) {
        const login = this.props.login as LoginView;
        login.passwordAction(e)
    }
    submit = (e: Event): void => {
        e.preventDefault();
        const { history } = this.props;
        const login = this.props.login as LoginView;
        if (login && login.username && login.password) {
            Toast.success('正在登录')
            history.push('/home');
        } else {
            alert('输入不完整');
        }
    }
    render(): JSX.Element {
        const login = this.props.login as LoginView;
        return (
            <View style={styles.container} >
                <View style={styles.logoview}>
                    <Image source={require('../../images/car.png')} style={styles.logo} />
                    <Text style={styles.title}>登陆</Text>
                </View>

                <WingBlank>
                    <List style={styles.list}>
                        <InputItem
                            onChange={(e) => this.changePhone(e)}
                            value={login.username}
                            type="phone"
                            placeholder="请输入账号"
                        >账号</InputItem>
                        <InputItem
                            onChange={(e) => this.changePwd(e)}
                            value={login.password}
                            type="password"
                            placeholder="请输入密码"
                        >密码</InputItem>
                    </List>
                    <Button
                        onClick={this.submit.bind(this)}
                        type="primary">登录</Button>
                </WingBlank>
            </View>
        )
    }
}

export default withRouter(Login)
// style
///////////////////////////////////////////////////

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    logoview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },
    title: {
        marginTop: 20,
        fontSize: 20,
    },
    logo: {
        display: 'flex',
        width: 120,
        height: 80
    },
    list: {
        marginBottom: 20
    }
});