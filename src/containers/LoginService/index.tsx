import * as React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';
import './style.scss';
import Login from "../../components/Login";
import {connect} from 'react-redux';
import {compose} from 'recompose';
import AOpenLogin from "../../store/actions/AOpenLogin";


interface DispatchProps {
    user: any
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginService extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        // this.open = this.props.openLogin;
        // this.setOpen = this.props.setOpen;
    }

    handleClickOpen = () => {
        console.log('Login');
        //this.setOpen(true);
    };

    handleClose = () => {
        //this.setOpen(false);
    };

    render() {
        const {user, signOut, signInWithGoogle} = this.props;

        return (
            <div>
                <Login
                    handleClickOpen={this.handleClickOpen}/>
            </div>
        );

    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
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


export default compose(
    withFirebaseAuth({
        providers,
        firebaseAppAuth
    }),
    connect(
        mapStateToProps,
        mapDispatchToProps))(LoginService);
