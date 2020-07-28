import * as React from 'react';
import './style.scss';

export default class Category extends React.Component<{ category: any }, {}> {
    render(){
        return(
            <div className="Category">
                <img
                    draggable={false}
                    alt={'logo'}
                    src={this.props.category.icon}
                />
                <label>{this.props.category.categoryName}</label>
            </div>
        )
    }
}
