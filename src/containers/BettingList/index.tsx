import React from 'react';
import {BettingListStyled} from './style';
import Match from '../../containers/Match/index';

export default class BettingList extends React.Component<any, any>{
    render(){
        return(
            <BettingListStyled>
                <Match/>
                <Match/>
            </BettingListStyled>
        )
    }
}
