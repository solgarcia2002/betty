import React from 'react';
import { connect } from 'react-redux';
import { toggleLogo } from '../../store/App/actions';
import { State } from '../../store/rootReducer';
import HeaderLogo from '../../components/HeaderLogo/index';
import SocketCategories from '../SocketCategories/index';

import './styles.scss';
interface DispatchProps {
  categoryList: Array<any>,
}


const Home = ({ categoryList }: DispatchProps) => {
  return (
    <div className={'Home'}>
        <HeaderLogo/>
        <SocketCategories
            categories={categoryList}/>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    categoryList: [
        {
            icon:'',
            categoryId: 1,
            categoryName: 'Super Liga'
        },
        {
            icon:'',
            categoryId: 2,
            categoryName: 'Liga Europea'
        },
        {
            icon:'',
            categoryId: 3,
            categoryName: 'Liga Argentina'
        },
        {
            icon:'',
            categoryId: 4,
            categoryName: 'Champions Ligue'
        },
        {
            icon:'',
            categoryId: 5,
            categoryName: 'Super Liga'
        },
        {
            icon:'',
            categoryId: 6,
            categoryName: 'Super Liga'
        }]
  };
};

export default connect(
  mapStateToProps,
  { toggleLogo }
)(Home);
