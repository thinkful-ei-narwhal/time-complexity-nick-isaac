TOH(4, 'A', 'C', 'B');

function TOH(disk, source, target, aux) {
	if (disk === 1) {
		print(source, target);
		return;
	} else {
		TOH(disk - 1, source, aux, target);
		TOH(1, source, target, aux);
		TOH(disk - 1, aux, target, source);
	}
}

function print(fromColumn, toColumn) {
	console.log(`${fromColumn} -> ${toColumn}`);
}

/* ******************************************
    Sheep Jump iterative Solution
**********************************************/
function sheepJump(jump) {
	for (let i = 1; i <= jump; i++) {
		if (i === jump) {
			return console.log('All sheep jumped over the fence');
		}
		console.log(i, 'Another sheep jumped over the fence');
	}
}

sheepJump(3);

/* ******************************************
   Power Calculator iterative Solution
**********************************************/
function powerCal(base, power) {
	let result = 1;
	if (power < 0) {
		return console.log('exponent should be >= 0');
	}
	for (let i = 0; i < power; i++) {
		result = result * base;
	}
	console.log('powerCal = ', result);
}

powerCal(5, 5);

/* ******************************************
   Reverse String iterative Solution
**********************************************/

function reverseStr(str) {
	let result = [];

	for (let i = 1; i <= str.length; i++) {
		result.push(str[str.length - i]);
	}
	return console.log('Reverse String =', result);
}

reverseStr('Solution');
