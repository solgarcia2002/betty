import * as React from 'react';
import {connect} from 'react-redux';
import UserData from '../../components/UserData/index';
import Login from '../../containers/LoginService/index';
import {HeaderLogoStyled,HeaderStyled} from './style';
import AOpenLogin from "../../store/actions/AOpenLogin";
import {Modal} from '@material-ui/core';

class HeaderLogo extends React.Component <any, any> {
    OpenLogin() {
        this.props.openLogin(true);
        return false;
    }

    OpenUserMenu() {
        console.log('user menu');
        return false;
    }
    handleClose (){
        this.props.openLogin(false);
        return false;
    }

    render() {
        const open:boolean = this.props.showLogin;
        const openLogin = this.OpenLogin.bind(this);
        const openUserMenu = this.OpenUserMenu.bind(this);
        const handleClose = this.handleClose.bind(this);
        return (
            <HeaderStyled>
                <HeaderLogoStyled>
                    <img
                        draggable={false}
                        alt={'logo'}
                        src={require('../../assets/logo.svg')}
                    />
                </HeaderLogoStyled>
                <UserData
                    openLogin={openLogin}
                    openUserMenu={openUserMenu}
                    user={this.props.user}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Login
                    //closeLogin={handleClose}
                    />
                </Modal>
            </HeaderStyled>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        showLogin: state.User.showLogin,
        user: state.User.data
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
