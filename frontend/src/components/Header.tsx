import React from 'react';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

import './Header.css';


interface Props {
    history: History;
}

function Header(props: Props){
	const {history} = props;
	
	return(
		<div className = 'Header'>
            <button className='JarDek' onClick = {() => history.push('/main')}>JarDek</button>
            <div className = 'MenuBox'>
                <button className='Menu' onClick = {() => history.push('/login')}>Log in</button>
                <button className='Menu' onClick = {() => history.push('/signup')}>Sign up</button>
                <button className='Menu' onClick = {() => history.push('/mypage')}>My Page</button>
                <button className='Menu' onClick = {() => history.push('/qna')}>QnA</button>
            </div>
        </div>
	);	
}

export default Header;