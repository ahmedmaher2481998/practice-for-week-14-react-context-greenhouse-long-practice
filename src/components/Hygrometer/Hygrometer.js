import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useEffect, useState } from "react/cjs/react.development";
import { useClimate } from "../../context/ClimateContext";
function Hygrometer() {
	const { hydo, setHydo } = useClimate();
	const [hydo1, setHydo1] = useState(50);
	useEffect(() => {
		setTimeout(() => {
			setHydo1(hydo);
			console.log(hydo, "o", hydo1, "new");
		}, "1000");
	}, [hydo]);
	return (
		<section>
			<h2>Hygrometer</h2>
			<div className='actual-humid'>Actual Humidity: {hydo}%</div>
			<ReactSlider
				value={hydo1}
				onChange={(val) => {
					setHydo(val);
				}}
				className='hygrometer-slider'
				thumbClassName='hygrometer-thumb'
				trackClassName='hygrometer-track'
				ariaLabel={"Hygrometer"}
				orientation='vertical'
				min={0}
				max={100}
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

export default Hygrometer;
