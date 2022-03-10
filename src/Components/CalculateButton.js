export const CalculateButton = ({ text }) => {
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
