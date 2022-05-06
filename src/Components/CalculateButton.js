export const CalculateButton = ({ children }) => {
	return (
		<div className="flex justify-center items-center">
			<button
				className="focus:outline-1 focus:outline focus:outline-white px-8 py-1 cursor-pointer rounded-md uppercase shadow-xl bg-accent tracking-wide mt-5 hover:brightness-95  transition-transform active:scale-105"
				type="submit"
			>
				{children}
			</button>
		</div>
	);
};
