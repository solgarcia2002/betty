import React from 'react';
import './style.scss';
import Match from '../../containers/Match/index';

export default class BettingList extends React.Component<any, any>{
    render(){
        return(
            <div className={'BettingList'}>
                <Match/>
                <Match/>
            </div>
        )
    }
}