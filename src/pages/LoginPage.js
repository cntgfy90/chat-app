import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class LoginPage extends Component {
	render() {
		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className='paper'>
					<Avatar className='avatar'>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign In
					</Typography>
					<form className='form' noValidate>
						<TextField
							name='email'
							label='Email Address'
							type='email'
							id='email'
							autoComplete='email'
							variant='outlined'
							margin='normal'
							required
							fullWidth
							autoFocus
						/>
						<TextField
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							variant='outlined'
							margin='normal'
							required
							fullWidth
						/>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/>
						<Button
							className='submit'
							type='submit'
							varinat='contained'
							color='primary'
							fullWidth
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot Password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='#' variant='body2'>
									Do not have an account? Sign Up
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

export default LoginPage;
