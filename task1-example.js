function sumInt(str) {
	var sum = undefined;
	// if (str != null) {
	// 	var nums = str.split(",");
	// 	if (nums) {
	// 		sum = nums.map(n=> Number(n)).reduce((a, b) => a + b);
	// 	}
	// }
	 if (str !=null){
		var nums = str.split(",");
		if(nums){
			sum=0;
			for(var i=0;i<nums.length;i++){
			sum +=Number(nums[i]);
			};
		}
	}
	return sum;
}

exports.sumInt = sumInt;