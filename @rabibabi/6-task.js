function descNumber(n) {
    let s = String(n), ss = '';

    // while (s !== '') {
    //     if (s.includes('9')) {
    //         ss += '9';
    //         s = s.replace('9', '');
    //     } else if (s.includes('8')) {
    //         ss += '8';
    //         s = s.replace('8', '');
    //     } else if (s.includes('7')) {
    //         ss += '7';
    //         s = s.replace('7', '');
    //     } else if (s.includes('6')) {
    //         ss += '6';
    //         s = s.replace('6', '');
    //     } else if (s.includes('5')) {
    //         ss += '5';
    //         s = s.replace('5', '');
    //     } else if (s.includes('4')) {
    //         ss += '4';
    //         s = s.replace('4', '');
    //     } else if (s.includes('3')) {
    //         ss += '3';
    //         s = s.replace('3', '');
    //     } else if (s.includes('2')) {
    //         ss += '2';
    //         s = s.replace('2', '');
    //     } else if (s.includes('1')) {
    //         ss += '1';
    //         s = s.replace('1', '');
    //     } else if (s.includes('0')) {
    //         ss += '0';
    //         s = s.replace('0', '');
    //     }
    // }


    for (let i = 9; i >= 0; i--) {
    	let t = String(i);
    	if (s.includes(t)) {
    		ss += t;
    		s = s.replace(t, '');
    	}
    }

    return ss;
}

console.log(descNumber(42145)) // 54124
console.log(descNumber(1234567890)) // 9876543210