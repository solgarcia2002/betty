import * as React from 'react';
import Avatar from '../Avatar/index';
import './style.scss';

export default class UserData extends React.Component <any, any> {
    openLogin:any;
    constructor(props:any){
        super(props);
        this.openLogin = props.openLogin.bind(this);
    }
    render(){
        return (
            <div className={'UserData'}>
                <div className={'Data'}>
                    <label className={'CreditsLabel'}>Creditos <span className={'Credits'}>1255</span></label>
                    <label className={'UserName'}> <a href={'#'} onClick={this.openLogin}>Login</a></label>
                </div>
                <Avatar/>
            </div>
        );
    }
}