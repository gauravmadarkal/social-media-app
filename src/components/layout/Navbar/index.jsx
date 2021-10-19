import React, { useContext, useState } from 'react';
import './style.scss';
import Logo from "../../../assets/imgs/app_logo.png";
import User from "../../../assets/imgs/account.png";
import GlobalContext from '../../../context/GlobalContext/GlobalContext';
import Button from '../../common/Button';

const Navbar = () => {
	const [showProfileDetails, setShowProfileDetails] = useState(false);
	const { profileState } = useContext(GlobalContext);
	const [profileName, setProfileName] = profileState;
	const [name, setName] = useState();
	const handleLogin = () => {
		if (profileName) {
			setProfileName();
		}
		else if (name) {
			setProfileName(name);
		}
	}

	return (
		<div className="nav">
			<div className='logo-wrapper'>
				<img className="logo" src={Logo} alt='Thoughts - Social Media app' />
			</div>
			<div 
				className="username"
				role='button'
				onClick={() => setShowProfileDetails(!showProfileDetails)}
			>
				<p>Hello, {profileName || 'Anonymous'}</p>
				<img src={User} className="account" alt='Thoughts - User' />
			</div>
			{showProfileDetails && 
				<div className='profile-dropdown'>
					{profileName? 
						<p>You are signed in as {profileName}</p> 
						:
						<div className='form-input'>
							<label>Username</label>
							<input 
								type='text' 
								placeholder='Enter username' 
								className='new-username' 
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
					}
					<Button 
						content={`${profileName? 'Logout' : 'Login'}`} 
						type='primary' 
						clickHandler={handleLogin} 
						classes='login-button'
					/>
				</div>
			}
		</div>
	);
};

export default Navbar;