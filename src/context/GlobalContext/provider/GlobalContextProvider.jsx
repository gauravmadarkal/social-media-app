import React, { useState } from 'react';
import GlobalContext from '../GlobalContext';


const GlobalContextProvider = ({
	children
}) => {
	const [profileName, setProfileName] = useState("Anonymous");

	// useEffect(() => {
	// 	// in realuity you will
	// 	// make an api call to backend to fetch profile details and setProfileDetails
	// }, []);

	return (
		<GlobalContext.Provider
			value={{
				profileName
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalContextProvider;