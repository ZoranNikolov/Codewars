function XO(str) {
	let x = 0;
	let o = 0;
	str.split('').forEach((el) => {
		if (el.toLowerCase() === "x") {
			x++;
		}
		if (el.toLowerCase() === "o") {
			o++;
		}
	});
	return x === o;
}

console.log(XO("ooxx"), XO("xooxx"), XO("ooxXm"), XO("zpzpzpp"), XO("zzoo"));
