import { useState } from "react";
import Form from "./Form";
import Diagram from "./Diagram";

const Card = () => {
	const [values, setValues] = useState(false);

	const submitValues = (values) => setValues(values);

	const maxWidth = values ? "lg:max-w-5xl max-w-2xl" : "max-w-max";

	const className =
		"flex flex-col gap-10 justify-center shadow-md items-center my-10 py-6 px-6 md:py-8 md:px-10 w-10/12 rounded-2xl text-base font-sans bg-primary lg:flex-row lg:my-0 lg:w-full lg:justify-around " +
		maxWidth;

	return (
		<div className={className}>
			<Form submitValues={submitValues} />
			{values && <Diagram {...values} />}
		</div>
	);
};

export default Card;
