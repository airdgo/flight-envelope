export const Input = ({ label, unit, ...props }) => {
	return (
		<div className="flex items-center justify-between">
			<label className="w-26">{label}:</label>
			<input
				type="number"
				className="w-6/12 max-w-xxs mx-3 pl-2 bg-transparent border-white border focus:outline-none appearance-none"
				{...props}
				required={true}
				min={0}
				step={"any"}
			/>
			<span className="w-20 text-right">{unit}</span>
		</div>
	);
};
