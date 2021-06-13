import React from 'react';
import {MatchStyled, VsStyled}from './style';
import Player from '../../components/Player/index';
import {connect} from "react-redux";

class Match extends React.Component<any,any> {
    onSelectPlayer(playerId:any){
        console.log(playerId)
    }
    render(){
        return(
            <MatchStyled >
                <Player playerId={'123'} user={this.props.user}/>
                <VsStyled> vs </VsStyled>
                <Player playerId ={345} user={this.props.user}/>
            </MatchStyled>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.User.data
    };
};

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Match);
