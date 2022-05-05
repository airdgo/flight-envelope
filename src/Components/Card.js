import { useState } from "react";
import Form from "./Form";
import Diagram from "./Diagram";

const Card = () => {
	const [values, setValues] = useState(false);

	const submitValues = (values) => setValues(values);

	return (
		<div className="flex flex-col justify-center shadow-md items-center my-8 px-8 py-6 w-10/12 max-w-sm rounded-2xl text-base font-sans bg-primary lg:flex-row lg:my-0 lg:w-auto lg:max-w-max lg:justify-around">
			<Form submitValues={submitValues} />
			{values && <Diagram {...values} />}
		</div>
	);
};

export default Card;