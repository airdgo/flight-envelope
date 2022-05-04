export const CalculateButton = ({ text }) => {
	return (
		<div className="flex justify-center items-center">
			<input
				className="px-8 py-1 cursor-pointer rounded-md uppercase shadow-xl bg-accent tracking-wide mt-5 hover:brightness-95 transition-all active:scale-105"
				type="submit"
				value={text}
			/>
		</div>
	);
};
