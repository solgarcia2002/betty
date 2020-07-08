import * as React from 'react';
import UserData from '../UserData/index';
import './style.scss';

export default class Category extends React.Component<{ category: any }, {}> {
    constructor(props:any){
        super(props);
    }
    render(){
debugger
        return(

            <div className="Category">
                <img
                    draggable={false}
                    alt={'logo'}
                    src={require(this.props.category.icon)}
                />
                <label>{this.props.category.categoryName}</label>
            </div>
        )
    }
}
