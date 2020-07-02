import * as React from 'react';
import Avatar from '../Avatar/index';
import './style.scss';

export default function UserData() {
    return (
        <div className={'UserData'}>
            <div className={'Data'}>
                <label className={'CreditsLabel'}>Creditos <span className={'Credits'}>1255</span></label>
                <label className={'UserName'}> Juan Idalgo</label>
            </div>
            <Avatar/>
        </div>
    )
}