import * as React from 'react';
import {LateralBanners} from './style';

interface DispatchProps {
    banners: Array<any>,
}

export default class LateralBanner extends React.Component<DispatchProps, {}> {

    render() {
        if (this.props.banners) {
            return (
                <LateralBanners>
                    {
                        this.props.banners.map((ban, index) => {
                            return <div>Banner 1</div>
                        })}
                </LateralBanners>
            )
        }
        else {
            return null
        }
    }
}
