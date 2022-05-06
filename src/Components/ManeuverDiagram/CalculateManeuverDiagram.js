export const CalculateManeuverDiagram = (mass, wingArea, loadFactor, CLMax) => {
	// Military aircraft diagram based on MIL

	// Input

	let maxNegLoadFactor =
		loadFactor >= 6 && loadFactor <= 8
			? -3
			: loadFactor >= 4 && loadFactor < 6
			? -2
			: -1;

	let n3 = maxNegLoadFactor === -3 ? -1 : 0;

	// Constants

	const g = 9.81;
	const rho = 0.2655;

	// General calculus

	// Aircraft Weight

	const Gav = (mass * g) / 10;

	//.................................
	// Maneuver Diagram calculus
	//.................................

	// Point A

	// Stall speed calculus

	const Vs = Math.sqrt((2 * Gav) / rho / wingArea / CLMax);

	const Va = Vs * Math.sqrt(loadFactor);

	const A = [Va, loadFactor];

	// Point D

	const Vh = 7.7 * Math.sqrt(Gav / wingArea);

	const D = [Vh, maxNegLoadFactor];

	// Point B

	const Vl = 1.4 * Vh;

	const B = [Vl, loadFactor];

	// Point E

	const CLMaxNeg = -0.65 * CLMax;

	const Ve = Math.sqrt(
		(2 * Math.abs(maxNegLoadFactor) * Gav) / rho / wingArea / Math.abs(CLMaxNeg)
	);

	const E = [Ve, maxNegLoadFactor];

	// Point C

	const C = [Vl, n3];

	const results = {
		A,
		B,
		C,
		D,
		E,
		Vs,
		loadFactor,
		maxNegLoadFactor,
		Gav,
		rho,
		wingArea,
		CLMaxNeg,
	};

	return results;
};
