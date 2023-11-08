function findNb(m) {
	let n = 0;
	while (m >= 0) {
		m -= (1 + n) ** 3
		if (m == 0)
			return n + 1;
		else
			n++;
	}
	return -1;
}

console.log(findNb(91716553919377)) // -1
console.log(findNb(1071225)) // 45 