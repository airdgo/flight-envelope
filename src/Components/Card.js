import { useState } from "react";
import Form from "./Form";
import Diagram from "./Diagram";

const Card = () => {
	const [mass, setMass] = useState("");
	const [wingArea, setWingArea] = useState("");
	const [loadFactor, setLoadFactor] = useState("");
	const [CLMax, setCLMax] = useState("");

	const submitValues = (mass, wingArea, loadFactor, CLMax) => {
		setMass(mass);
		setWingArea(wingArea);
		setLoadFactor(loadFactor);
		setCLMax(CLMax);
	};

	return (
		<div className="flex flex-col justify-center items-center my-8 px-8 py-6 w-10/12 max-w-sm rounded-2xl text-base font-sans bg-card1 lg:flex-row lg:my-0 lg:w-auto lg:max-w-max lg:justify-around">
			<Form submitValues={submitValues} />
			{mass > 0 ? (
				<Diagram
					mass={mass}
					wingArea={wingArea}
					loadFactor={loadFactor}
					CLMax={CLMax}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default Card;
