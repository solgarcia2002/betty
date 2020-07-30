import * as React from 'react';
import {connect} from 'react-redux';
import UserData from '../../components/UserData/index';
import Login from '../../components/Login/index';
import './style.scss';
import AOpenLogin from "../../store/actions/AOpenLogin";
import {Modal} from '@material-ui/core';
import {debug} from "util";


class HeaderLogo extends React.Component <any, any> {
    OpenLogin() {
        this.props.openLogin(true);
        return false;
    }
    handleClose (){
        this.props.openLogin(false);
        return false;
    }

    render() {
        const open:boolean = this.props.showLogin;
        const openLogin = this.OpenLogin.bind(this);
        const handleClose = this.handleClose.bind(this);
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Login
                    closeLogin={handleClose}/>
                </Modal>
            </div>

        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        showLogin: state.User.showLogin,
        user: state.User
    };

};

const mapDispatchToProps = (dispatch: any) => ({
    openLogin: function (data:boolean) {
        dispatch(AOpenLogin(data));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderLogo);