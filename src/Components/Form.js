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

	const showDiagram = (e) => {
		e.preventDefault();
		submitValues(values);
	};

	return (
		<form
			className="w-full max-w-xs text-white flex flex-col gap-6 text-sm sm:text-base"
			onSubmit={showDiagram}
		>
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

			<CalculateButton>Calculate!</CalculateButton>
		</form>
	);
};

export default Form;
