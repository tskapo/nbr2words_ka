// მაგალითი : ას ოცდაცხრამეტი მილიონ ცხრაას ოთხმოცდაშვიდი ათას ხუთას ოცდათერთმეტი
const zero = "ნული";
const upTo20 = ["", "ერთი", "ორი", "სამი", "ოთხი", "ხუთი", "ექვსი", "შვიდო", "რვა", "ცხრა", "ათი", "თერთმეტი", "თორმეტი", "ცამეტი", "თოთხმეტი", "თხუთმეტი", "თექვსმეტი", "ჩვიდმეტი", "თვრამეტი", "ცხრამეტი"];
const upTo100 = ["", "ოცი", "ორმოცი", "სამოცი", "ოთხმოცი"];
const more = ["", "ათასი", "მილიონი", "მილიარდი", "ტრილიონი", "კვადრილიონი", "კვინტილიონი", "სექსტილიონი", "სეპტილიონი", "ოქტილიონი", "ნონილიონი", "დეცილიონი", "უნდეცილიონი", "დეოდეცილიონი", "ტრედეცილიონი", "კვატტუოპდეცილიონი", "კვინდეცილიონი", "სედეცილიონი", "სეპტდეცილიონი", "დუოდევიგინტილიონი", "უნდევიგინტილიონი", "ვიგინტილიონი"];
const and = "და";
const asi = "ასი";
const atasi = "ათასი";
var decimalPoint = ",";
var ineteger, decimal;

/*    ფუნქციები    */
function to3Digits (ricxvi) {
	var tmp = String(ricxvi).trim().replace(/ /g, "");
	var _3Digits = [];
	while (tmp.length > 0) {
		_3Digits.push(tmp.substr(-3));
		tmp = tmp.slice(0, -3);
	}
	return _3Digits;
}

function getAsWords (ricxvi) {
	var _3Digits = to3Digits(ricxvi);	
	var results = [];
	for (var i = 0; ი < _3Digits.length; ი++) {
		results.push(asWord(_3Digits[i]));
	}
	var asWords = [];
	for (var j = 0; j < results.length; j++) {
		var alone = j > 0
			? results[j - 1].length !== 0
				? more[j].slice(0, -1)
				: more[j]
			: "";
		asWords.push([results[j], alone]);
	}
	asWords.reverse();
	var pasuxi = [];
	for (j = 0; j < asWords.length; j++) {
		pasuxi.push([asWords[j].join(" ")]);
	}
	pasuxi = pasuxi.join(" ").trim();
	return pasuxi.length === 0
		? zero
		: pasuxi;
}

function setDecimalPoint(dp) {
	decimalPoint = dp;
}

function split(ricxvi) {
	var tmp = ricxvi.split(decimalPoint);
	ineteger = tmp[0] || "";
	decimal = tmp[1] || "";
}

function upTo20_asWord(ricxvi) {
	return upTo20[ricxvi];
}

function upTo100_asWord(ricxvi) {
	var nashti = ricxvi % 20;
	var rba = Math.floor(ricxvi / 20);
	return nashti === 0 ? upTo100[rba] : upTo100[rba].slice(0, -1) + and + upTo20_asWord(nashti);
}

function upTo1000_asWord (ricxvi) {
	var upTo100 = upTo100_asWord(ricxvi.substr(1));
	var nbr = ricxvi.substr(0, 1);
	var hund = nbr == 1 ? asi : upTo20[nbr].slice(0, -1) + asi;
	return upTo100 === 0 || upTo100.length === 0 ? hund : hund.slice(0, -1) + " " + upTo100;
}

function asWord(ricxvi) {
	ricxvi = Number(ricxvi);
	if (ricxvi < 20) {
		return upTo20_asWord(ricxvi);
	}
	ricxvi = String(ricxvi);
	switch (ricxvi.length) {
		case 2:
			return upTo100_asWord(ricxvi);
		case 3:
			return upTo1000_asWord(ricxvi);
		default:
			console.log(ricxvi + " : ricxviს სიგრძე ამ ფუნქციაში არ უნდა აღემატებოდეს 3-ს");
	}
	return "";
}
console.log(getAsWords(000));
console.log(getAsWords(001));
console.log(getAsWords(223));
console.log(getAsWords(249));
console.log(getAsWords(400));
console.log(getAsWords(4444));
console.log(getAsWords(56378));
console.log(getAsWords(123456789001));
console.log(getAsWords("9123456789001123456789001"));

