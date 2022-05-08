import "./ClimateStats.css";
import { useClimate } from "../../context/ClimateContext";
function ClimateStats() {
	const { temp, hydo } = useClimate();
	return (
		<div className='climate-stats'>
			<div className='temperature'>Temperature {temp}°F</div>
			<div className='humidity'>Humidity {hydo}%</div>
		</div>
	);
}

export default ClimateStats;
