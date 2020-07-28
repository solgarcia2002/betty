import './style.scss';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default class Player extends React.Component<any, any> {

    render() {
        return (
            <div className={'Player'}>
                <div className={'check'}>
                    <Checkbox color='primary'
                              style={{
                                  color: "#00e676",
                              }}/>
                    <img
                        draggable={false}
                        alt={'logo'}
                        src={require('../../assets/logo.svg')}
                    />
                </div>
                <p>358 Apostadores</p>
            </div>
        )
    }
}