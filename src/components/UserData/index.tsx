import * as React from 'react';
import { Avatar } from '@material-ui/core';
import {DataStyled,UserDataStyled , UserNameStyled, CreditsStyled} from './style';

export default class UserData extends React.Component <any, any> {
    openLogin: any;
    openUserMenu: any;

    constructor(props: any) {
        super(props);
        this.openLogin = props.openLogin.bind(this);
        this.openUserMenu = props.openUserMenu.bind(this);
    }

    render() {
        let loginLink = <a href={'#'} onClick={this.openLogin}>Login</a>;
        let image = null;
        let name = null;
        if (this.props.user && this.props.user.name) {
            loginLink = <a href={'#'} onClick={this.openUserMenu}>{this.props.user.name}</a>;
            image = this.props.user.photoURL;
            name = this.props.user.name;
        }
        return (
            <UserDataStyled>
                <DataStyled>
                    <label className={'CreditsLabel'}>Creditos
                        <CreditsStyled>1255</CreditsStyled>
                    </label>
                    <UserNameStyled> {loginLink}</UserNameStyled>
                </DataStyled>
                <Avatar alt={name} src={image} />
            </UserDataStyled>
        );
    }
}
