import * as React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase';
import Login from "../../components/Login";
import {connect} from 'react-redux';
import {compose} from 'recompose';
import AOpenLogin from "../../store/actions/AOpenLogin";
import ASetUser from "../../store/actions/ASetUser";
import {DialogContent} from "@material-ui/core";

interface DispatchProps {
    user: any,
    signInWithGoogle: any,
    openLogin: any,
    setUser: any,
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginService extends React.Component<DispatchProps> {

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
        this.props.openLogin(false);
    };

    handleSignInWithGoogle() {

        this.props.signInWithGoogle()
        console.log('USER', this.props.user)
        const userData = {
            email: this.props.user.email,
            name: this.props.user.displayName,
            photoURL: this.props.user.photoURL
        };
        this.props.setUser(userData);
        this.props.openLogin(false);
    }

    render() {
        const handleClose = this.handleClose.bind(this);
        const handleClickOpen = this.handleClickOpen.bind(this);
        const handleSignInWithGoogle = this.handleSignInWithGoogle.bind(this);

        return (
            <DialogContent>
                <div>
                    <Login
                        closeLogin={handleClose}
                        handleClickOpen={handleClickOpen}
                        signInWithGoogle={handleSignInWithGoogle}
                    />
                </div>
            </DialogContent>
        );

    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}
const mapStateToProps = (state: any) => {
    return {
        stateUser: state.User
    };

};


const mapDispatchToProps = (dispatch: any) => ({
    openLogin: function (data: boolean) {
        dispatch(AOpenLogin(data));
    },
    setUser: function (data: object) {
        dispatch(ASetUser(data));
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
