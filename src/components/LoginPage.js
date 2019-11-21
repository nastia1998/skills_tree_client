import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import styles from '../styles/LoginPage.css.js'
import axios from "axios";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Skill's tree
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class LoginPage extends Component {

    state = {
        login: '',
        password: '',
        token: '',
        error: false
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        const body = {
            login: this.state.login,
            password: this.state.password
        }

        try {
            const { data } = await axios.post("https://localhost:44390/api/auth/authenticate", body);
            if (data.token) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', data.id)
                localStorage.setItem('loggedIn', 'loggedIn')
                localStorage.setItem('email', data.email)
                this.props.history.push("/todolists")

            } else {
                this.setState({ error: true })
            }

        } catch (e) {
            console.log(e)
            alert('Authorization failed. Check your input values!')
        }

    }

    onChange = (e) => {

        switch (e.target.type) {
            case 'text':
                this.setState({ login: e.target.value })
                break

            case 'password':
                this.setState({ password: e.target.value })
                break

            default: break;
        }

    }

    render() {
        return (
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div style={styles.container}>
                    <Avatar style={styles.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form style={styles.form} onSubmit={this.handleSubmit} noValidate >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            autoFocus
                            onChange={this.onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.onChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={styles.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}

export default LoginPage;