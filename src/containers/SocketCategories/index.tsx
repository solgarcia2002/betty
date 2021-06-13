import * as React from 'react';
import {SocketCategory} from './style';
import Category from '../../components/Category/index';

interface DispatchProps {
    categories: Array<any>,
}

const SocketCategories = (props: DispatchProps) => {
    if (props.categories) {
        return (
            <SocketCategory>
                {props.categories.map((cat, index) => <Category category={cat} key={index}/>)}
            </SocketCategory>
        )
    }
    else {
        return null
    }
}
export default SocketCategories
