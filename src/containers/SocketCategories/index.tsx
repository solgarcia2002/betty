import * as React from 'react';
import './style.scss';
import Category from '../../components/Category/index';

interface DispatchProps {
    categories: Array<any>,
}

export default class SocketCategories extends React.Component<DispatchProps, {}> {

    render() {
        if (this.props.categories) {
            return (
                <div className="SocketCategories">
                    {
                        this.props.categories.map((cat, index) => {
                            return <Category category={cat} key={index}/>
                        })}
                </div>
            )
        }
        else {
            return null
        }
    }
}
