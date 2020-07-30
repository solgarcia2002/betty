import * as React from 'react';
import './style.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    openLogin= () => {
        console.log('open')
    }
    handleClickOpen = () => {
        //this.setOpen(true);
    };

    handleClose = () => {
        //this.setOpen(false);
    };

    render() {

        return (
            <div>
                <Dialog open={true} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Lala
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary"
                        onClick={this.props.closeLogin}>
                            Cancel
                        </Button>
                        <Button color="primary">
                            Login with Google
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );

    }
}