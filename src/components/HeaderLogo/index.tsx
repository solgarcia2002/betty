import * as React from 'react';
import UserData from '../UserData/index';
import './style.scss';

export default function Logo() {
    return (
        <div className="Header">
            <div className={'HeaderLogo'}>
            <img
                draggable={false}
                alt={'logo'}
                src={require('../../assets/logo.svg')}
            />
            </div>
            <UserData/>
        </div>
    )
}
