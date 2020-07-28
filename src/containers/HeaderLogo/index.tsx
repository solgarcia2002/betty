import * as React from 'react';
import {connect} from 'react-redux';
import UserData from '../../components/UserData/index';
import './style.scss';
import AOpenLogin from "../../store/actions/AOpenLogin";

class HeaderLogo extends React.Component <any, any> {
    OpenLogin() {
        return this.props.openLogin();
    }

    render() {
        const openLogin = this.OpenLogin.bind(this);
        return (
            <div className="Header">
                <div className={'HeaderLogo'}>
                    <img
                        draggable={false}
                        alt={'logo'}
                        src={require('../../assets/logo.svg')}
                    />
                </div>
                <UserData
                    openLogin={openLogin}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.User
    };

};

const mapDispatchToProps = (dispatch: any) => ({
    openLogin: function () {
        dispatch(AOpenLogin());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderLogo);