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

	const inputs = [
		{
			name: "mass",
			label: "Mass",
			unit: "[kg]",
		},

		{
			name: "wingArea",
			label: "Wing area",
			unit: "[m^2]",
		},

		{
			name: "loadFactor",
			label: "Max. Load Factor",
			unit: "[+]",
		},

		{
			name: "CLMax",
			label: "CLMax",
			unit: "",
		},
	];

	const [error, setError] = useState(null);

	const showDiagram = (e) => {
		e.preventDefault();

		if (
			values.mass < 0 ||
			values.wingArea < 0 ||
			values.loadFactor < 0 ||
			values.CLMax < 0
		) {
			return setError(" < 0");
		}

		submitValues(values);
	};

	return (
		<form className="w-full max-w-xs text-white" onSubmit={showDiagram}>
			<AircraftType />
			{inputs.map((input, index) => {
				return (
					<Input
						key={index}
						{...input}
						onChange={(e) => {
							setValues({ ...values, [e.target.name]: e.target.value });
						}}
					/>
				);
			})}
			{/* <Input label="Cruising Speed" unit="m/s" /> */}
			{error && <p>{error}</p>}
			<CalculateButton text="Calculate!" />
		</form>
	);
};

export default Form;
