import React, { useState } from 'react';
import GlobalContext from '../GlobalContext';


const GlobalContextProvider = ({
	children
}) => {
	const [profileName, setProfileName] = useState();
	return (
		<GlobalContext.Provider
			value={{
				profileState: [profileName, setProfileName]
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalContextProvider;