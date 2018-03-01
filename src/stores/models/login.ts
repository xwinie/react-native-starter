import { action, observable, useStrict } from 'mobx';
useStrict(true);

export interface LoginView {
    username: string
    password: string
    userNameAction(username: string): void
    passwordAction(password: string): void
}

export class Login {
    @observable username: string;
    @observable password: string;
    @action userNameAction(username: string): void {
        this.username = username;
    }
    @action passwordAction(password: string): void {
        this.password = password;
    }
}

export default new Login();