import React, { useContext } from 'react';
import './style.scss';
import Logo from "../../../assets/imgs/app_logo.png";
import GlobalContext from '../../../context/GlobalContext/GlobalContext';

const Navbar = () => {
	const { profileName } = useContext(GlobalContext);
	return (
		<div className="nav">
			<div className='logo-wrapper'>
				<img className="logo" src={Logo} />
			</div>
			<div className="username">
				<p>Hello, {profileName}</p>
			</div>
		</div>
	);
};

export default Navbar;