export const AircraftType = () => {
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
