import { useState } from "react";
import { AircraftType } from "./AircraftType";
import { CalculateButton } from "./CalculateButton";
import { Input } from "./Input";

const Form = ({ submitValues }) => {
	const [values, setValues] = useState({
		mass: "",
		wingArea: "",
		loadFactor: "",
		CLMax: "",
	});

	const showDiagram = (e) => {
		e.preventDefault();
		submitValues(values);
	};

	return (
		<form className="w-full max-w-xs text-white" onSubmit={showDiagram}>
			<AircraftType />
			<Input
				label="Mass"
				unit="kg"
				value={values.mass}
				onChange={(e) => {
					setValues({ ...values, mass: e.target.value });
				}}
			/>
			<Input
				label="Wing Area"
				unit="m^2"
				value={values.wingArea}
				onChange={(e) => {
					setValues({ ...values, wingArea: e.target.value });
				}}
			/>
			<Input
				label="Max. Load Factor"
				unit="+"
				value={values.loadFactor}
				onChange={(e) => {
					setValues({ ...values, loadFactor: e.target.value });
				}}
			/>
			<Input
				label="C_L_max"
				unit=""
				value={values.CLMax}
				onChange={(e) => {
					setValues({ ...values, CLMax: e.target.value });
				}}
			/>
			{/* <Input label="Cruising Speed" unit="m/s" /> */}
			<CalculateButton text="Calculate!" />
		</form>
	);
};

export default Form;
