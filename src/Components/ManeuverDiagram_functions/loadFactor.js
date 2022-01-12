export function posxArry(num, speed, endnum) {
	let arry = [];
	for (let i = 0; i < num; i = i + 0.5) {
		arry = [...arry, i];
	}

	arry = arry.map((num) => Math.sqrt(num) * speed);

	return [...arry, endnum];
}

export function posyArry(num, endnum) {
	let arry = [];
	for (let i = 0; i < num; i = i + 0.5) {
		arry = [...arry, i];
	}

	return [...arry, endnum];
}

export function negxArry(num, Gav, rho, S, negCLMax) {
	let arry = [];
	for (let i = num; i <= 0; i = i + 0.5) {
		arry = [...arry, i];
	}
	arry = arry.map((num) =>
		Math.sqrt((2 * Math.abs(num) * Gav) / rho / S / Math.abs(negCLMax))
	);

	return arry;
}

export function negyArry(num) {
	let arry = [];
	for (let i = num; i <= 0; i = i + 0.5) {
		arry = [...arry, i];
	}

	return arry;
}
