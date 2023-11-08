function minHanoi(num) {
	let total = 1;
	for (let i = 1; i < num; i++)
		total = total * 2 + 1;
	return total;
}

console.log(minHanoi(8));