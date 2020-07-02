import * as React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function Avatar(props: any) {

    return (
        <Grid className={'Avatar'} container justify="center" alignItems="center">
            <FontAwesomeIcon icon={faUser} size="3x"/>
        </Grid>
    );
}


const mapStateToProps = (state: any) => ({
    state: state
})

const mapDispatchToProps = (dispatch: any) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Avatar);

/*<Avatar alt="Remy Sharp" src={profile['profilepicturetest']} className={classes.avatar} /> */