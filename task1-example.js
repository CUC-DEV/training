function sumInt(str) {
	var sum = undefined;
	if (str != null) {
		var nums = str.split(",");
		if (nums) {
			sum = nums.map(n=> Number(n)).reduce((a, b) => a + b);
		}
	}
	return sum;
}

exports.sumInt = sumInt;