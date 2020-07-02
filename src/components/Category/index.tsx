import * as React from 'react';
import UserData from '../UserData/index';
import './style.scss';

export default class Category extends React.Component<{ category: any }, {}> {
    constructor(props:any){
        super(props);
    }
    render(){

        return(

            <div className="Category">
                <img
                    draggable={false}
                    alt={'logo'}
                    src={require('../../assets/logo.svg')}
                />
                <label>{this.props.category.categoryName}</label>
            </div>
        )
    }
}
