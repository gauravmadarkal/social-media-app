import React from 'react';
import './style.scss';

const Button = ({
	content,
	type,
	clickHandler,
	classes
}) => {
	return (
		<div 
			className={`custom-button ${type === 'primary' ? 'pri': type === 'outlined' ? 'bordered': 'sec'} ${classes}`}
			onClick={clickHandler}
			role='button'
			tabIndex={0}
		>
			<span>{content}</span>
		</div>
	);
};

export default Button;