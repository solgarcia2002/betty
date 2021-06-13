import './style.scss';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class Player extends React.Component<any, any> {

    render() {
        let disableBet:boolean = false;
        let checkboxColor:object = {
            color:"#FF00FF"
        };
        if(!this.props.user){
            disableBet = true;
            checkboxColor = {
                color:"#DDD"
            };
        }
        return (
            <div className={'Player'}>
                <div className={'check'}>
                    <FormControlLabel
                        disabled={ disableBet }
                        control={<Checkbox color='primary' style={checkboxColor}/>}
                        label=''
                        >
                    </FormControlLabel>
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
