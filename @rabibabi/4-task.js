function is_prime(n) {
	if (n <= 2 || n % 2 == 0)
		return false;
	for (let i = 3; i < n / 3; i += 2)
		if (n % i == 0)
			return false;
	return true;
}

console.log(is_prime(1)); // false
console.log(is_prime(2)); // true
console.log(is_prime(48756387678324863)); // false
console.log(is_prime(82589933)); // true
