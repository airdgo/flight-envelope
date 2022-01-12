import Plot from "react-plotly.js";
import {
	posxArry,
	posyArry,
	negxArry,
	negyArry,
} from "./ManeuverDiagram_functions/loadFactor.js";

function Diagram({ mass, wingArea, loadFactor, CLMax }) {
	// Military aircraft diagram based on MIL

	// Input

	// const mass = 10550;
	// const wingArea = 34;
	// const loadFactor = 6.5;
	// const CLMax = 1.48;

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

	//.......................................
	// Plot
	//.......................................

	const trace1 = {
		x: posxArry(loadFactor, Vs, A[0]),
		y: posyArry(loadFactor, A[1]),
		line: { shape: "spline", color: "#2ca02c" },
		type: "scatter",
		mode: "lines",
	};

	const trace2 = {
		x: [A[0], B[0], C[0], D[0], E[0]],
		y: [A[1], B[1], C[1], D[1], E[1]],
		line: { color: "#2ca02c" },
		type: "scatter",
	};

	const trace3 = {
		x: negxArry(maxNegLoadFactor, Gav, rho, wingArea, CLMaxNeg),
		y: negyArry(E[1]),
		line: { shape: "spline" },
		mode: "lines",
		type: "spline",
	};

	const annotation = () => {
		const point = ["A", "B", "C", "D", "E"];
		const velocity = [A[0], B[0], C[0], D[0], E[0]];
		const loadFactor = [A[1], B[1], C[1], D[1], E[1]];
		let annotation = [];
		for (let i = 0; i < point.length; i++) {
			let obj = {
				x: velocity[i],
				y: loadFactor[i],
				xref: "x",
				yref: "y",
				text: point[i],
				showarrow: true,
				ax: 0,
				ay: point[i] === "A" || point[i] === "B" ? -10 : 10,
			};
			annotation = [...annotation, obj];
		}
		return annotation;
	};

	const layout = {
		title: "Maneuver Diagram",
		showlegend: false,
		xaxis: {
			title: {
				text: "V [m/s]",
			},
		},
		yaxis: {
			title: {
				text: "n",
			},
		},
		annotations: annotation(),
		autosize: true,
		margin: {
			l: 60,
			r: 30,
			b: 90,
			t: 80,
			pad: 4,
		},
	};

	const data = [trace1, trace2, trace3];

	return (
		<div className="flex justify-center w-full h-auto mt-5 rounded-xl overflow-hidden lg:mt-0 lg:ml-8 lg:w-auto lg:max-w-xl">
			<Plot
				data={data}
				layout={layout}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
				}}
				useResizeHandler={true}
				config={
					({
						modeBarButtonsToRemove: [
							"zoom2d",
							"pan2d",
							"select2d",
							"lasso2d",
							"zoomIn2d",
							"zoomOut2d",
							"autoScale2d",
							"resetScale2d",
						],
					},
					{ staticPlot: true })
				}
			/>
		</div>
	);
}

export default Diagram;
