import React from 'react';
import './style.scss';
import Player from '../../components/Player/index';

export default class Match extends React.Component<any,any> {
    onSelectPlayer(playerId:any){
        console.log(playerId)
    }
    render(){
        return(
            <div className={'Match'}>
                <Player playerId={'123'}/><span className={'vs'}> vs </span><Player playerId ={345}/>
            </div>
        )
    }
}