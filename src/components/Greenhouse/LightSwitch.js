import "./LightSwitch.css";

import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
function LightSwitch() {
	const [isDay, setIsDay] = useState(true);
	const { themeName, setThemeName } = useTheme();
	return (
		<div className={`light-switch ${themeName}`}>
			<div
				onClick={(e) => {
					setThemeName("day");
					setIsDay(true);
					return;
				}}
				className={isDay ? "on" : "off"}
			>
				DAY
			</div>
			<div
				onClick={(e) => {
					setThemeName("night");
					setIsDay(false);
					return;
				}}
				className={isDay ? "off" : "on"}
			>
				NIGHT
			</div>
		</div>
	);
}

export default LightSwitch;
