import { useState } from "react";

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

const AircraftType = () => {
	return (
		<div className="flex justify-around mb-4">
			<label>Aircraft Type:</label>
			<select className="px-2 cursor-pointer bg-transparent border border-white">
				<option value="civil">Civil</option>
				<option value="military">Military</option>
			</select>
		</div>
	);
};

const Input = ({ label, unit, value, onChange }) => {
	return (
		<div className="flex items-center justify-between my-4">
			<label className=" w-26">{label}:</label>
			<input
				type="text"
				value={value}
				onChange={onChange}
				className=" w-6/12 max-w-xxs mx-3 pl-2 bg-transparent border-white border focus:outline-none"
			/>
			<span className="w-20 text-right">({unit})</span>
		</div>
	);
};

const CalculateButton = ({ text }) => {
	return (
		<div className="flex justify-center items-center">
			<input
				className="px-8 py-1 cursor-pointer rounded-md uppercase shadow-xl bg-red-500"
				type="submit"
				value={text}
			/>
		</div>
	);
};

export default Form;
