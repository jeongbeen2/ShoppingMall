import React, { useState } from 'react';
import {History} from 'history';

import './SignIn.css'

interface Props{
	history: History;
}


function SignIn(props: Props){
	/*state*/
	const [ID,setID] = useState<string>('');
	const [PW,setPW] = useState<string>('');
	/*props*/
	const {history} = props

    return(
        <div className = 'SignIn'>
			
			<div className = 'InputBox'>
				<div>
				<label>ID</label>
				<input
				placeholder = 'Insert ID'
				value = {ID}
				onChange = {(event) => setID(event.target.value)}
				/>
				</div>
				
				<div>
				<label>PW</label>
				<input
				placeholder = 'Insert PW'
				value = {PW}
				onChange = {(event) => setPW(event.target.value)}
				/>
				</div>
			</div>

			<div>
				<button	className = 'SignIn' onClick = {() => alert(`ID: ${ID} PW: ${PW}`)}>
					Sign in
				</button>

				<button className = 'SignUp' onClick = {() => history.push('/signup')}>
					Sign up
				</button>
			</div>
        </div>
    );
}




export default SignIn;