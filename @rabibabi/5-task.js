function highAndLow(str) {
	// str = str + " ";
	let buf = "", min = Infinity, max = -Infinity;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') {
			let n = Number(buf);
			if (n > max)
				max = n;

			if (n < min)
				min = n;
			
			buf = '';
		} else
			buf += str[i];
	}

	return `${max} ${min}`;
}


console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));