import React from 'react';
import { connect } from 'react-redux';
import { toggleLogo } from '../../store/App/actions';
import HeaderLogo from '../HeaderLogo/index';
import SocketCategories from '../SocketCategories/index';
import BettingList from '../BettingList/index';

import './style.scss';
interface DispatchProps {
  categoryList: Array<any>,
}


const Home = ({ categoryList }: DispatchProps) => {
  return (
    <div className={'Home'}>
        <HeaderLogo/>
        <SocketCategories
            categories={categoryList}/>
        <BettingList />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    categoryList: [
        {
            icon:'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F23.png',
            categoryId: 1,
            categoryName: 'Premier League'
        },
        {

            icon:'https://a3.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F2310.png',
            categoryId: 2,
            categoryName: 'Liga Europea'
        },
        {
            icon:'https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_superliga.png',
            categoryId: 3,
            categoryName: 'Liga Argentina'
        },
        {
            icon:'https://i.pinimg.com/originals/cc/5c/57/cc5c57cc21653b7fbad9c6ce99cdb711.png' ,
            categoryId: 4,
            categoryName: 'Champions Ligue'
        },
        {
            icon:'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F23.png',
            categoryId: 5,
            categoryName: 'Super Liga'
        },
        {
            icon:'https://a1.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F23.png',
            categoryId: 6,
            categoryName: 'Super Liga'
        }]
  };
};

export default connect(
  mapStateToProps,
  { toggleLogo }
)(Home);
