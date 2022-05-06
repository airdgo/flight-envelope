import Plot from "react-plotly.js";
import { useState } from "react";
import {
	posxArry,
	posyArry,
	negxArry,
	negyArry,
} from "./ManeuverDiagram_functions/loadFactor.js";
import { ChangeColorIco } from "./ChangeColorIco.js";
import { CalculateManeuverDiagram } from "./ManeuverDiagram_functions/CalculateManeuverDiagram";

function Diagram({ mass, wingArea, loadFactor, CLMax }) {
	const { A, B, C, D, E, Vs, maxNegLoadFactor, Gav, rho, CLMaxNeg } =
		CalculateManeuverDiagram(mass, wingArea, loadFactor, CLMax);

	const [colors, setColor] = useState([
		"#2161AD",
		"#3C597A",
		"#14DEE0",
		"#E4714E",
		"#AD2D21",
	]);

	const changeColor = (colors) => {
		const newColors = [...colors.slice(1), colors[0]];
		setColor(newColors);
	};

	const trace1 = {
		x: posxArry(loadFactor, Vs, A[0]),
		y: posyArry(loadFactor, A[1]),
		line: { shape: "spline", color: colors[0] },
		type: "scatter",
		mode: "lines",
	};

	const trace2 = {
		x: [A[0], B[0], C[0], D[0], E[0]],
		y: [A[1], B[1], C[1], D[1], E[1]],
		line: { color: colors[0] },
		type: "scatter",
	};

	const trace3 = {
		x: negxArry(maxNegLoadFactor, Gav, rho, wingArea, CLMaxNeg),
		y: negyArry(E[1]),
		line: { shape: "spline", color: colors[0] },
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

	const config = {
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
		hovermode: false,
		displayModeBar: true,
		displaylogo: false,
	};

	return (
		<div className="flex relative justify-center w-full h-auto mt-5 rounded-xl overflow-hidden lg:mt-0 lg:ml-8 lg:w-auto lg:max-w-xl">
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
				config={config}
			/>
			<ChangeColorIco onClick={() => changeColor(colors)} />
		</div>
	);
}

export default Diagram;
