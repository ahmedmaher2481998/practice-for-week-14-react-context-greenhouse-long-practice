// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useContext } from "react";
import { useState } from "react";

export const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext);
const ClimateProvider = ({ children }) => {
	const [temp, setTemp] = useState(50);
	const [hydo, setHydo] = useState(50);
	return (
		<ClimateContext.Provider value={{ temp, setTemp, hydo, setHydo }}>
			{children}
		</ClimateContext.Provider>
	);
};
export default ClimateProvider;
