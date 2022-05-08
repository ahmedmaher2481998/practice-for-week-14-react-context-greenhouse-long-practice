import ReactSlider from "react-slider";
import "./Thermometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react/cjs/react.development";
function Thermometer() {
	const { temp, setTemp } = useClimate();
	const [temp1, setTemp1] = useState(50);
	useEffect(() => {
		setTimeout(() => {
			setTemp1(temp);
			// console.log(temp, "o", temp1, "new");
		}, "1000");
	}, [temp]);
	return (
		<section>
			<h2>Thermometer</h2>
			<div className='actual-temp'>Actual Temperature: {temp}°F</div>
			<ReactSlider
				value={temp1}
				onChange={(val) => setTemp(val)}
				className='thermometer-slider'
				thumbClassName='thermometer-thumb'
				trackClassName='thermometer-track'
				ariaLabel={"Thermometer"}
				orientation='vertical'
				min={0}
				max={120}
				renderThumb={(props, state) => (
					<div {...props}>{state.valueNow}</div>
				)}
				renderTrack={(props, state) => (
					<div {...props} index={state.index}></div>
				)}
				invert
				pearling
				minDistance={1}
			/>
		</section>
	);
}

export default Thermometer;
