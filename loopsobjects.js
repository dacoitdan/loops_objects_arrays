var amanda = {
	fn: 'Amanda',
	ln: 'Harris',
	age: 42,
	gender: 'f',
	children: ['Ben (18, M)', 'Lisa (15, F)']
}

var brian = {
	fn: 'Brain',
	ln: 'Hall',
	age: 36,
	gender: 'm',
	children: ['Eric (11, F)', 'Jenny (8, F)']
}

var terrence = {
	fn: 'Terrence',
	ln: 'Smith',
	age: 49,
	gender: 'm',
	children: ['David (17, M)', 'Alex (23, F)', 'Joe (25, M)']
}

var alyssa = {
	fn: 'Alyssa',
	ln: 'Ingram',
	age: 28,
	gender: 'f',
	children: ['Jamie (3, F)', 'Lori (2, F)']
}

//#1

var peeps = [amanda, brian, terrence, alyssa];

for(var i = 0; i < peeps.length; i++){
	peeps[i].children[peeps[i].children.length] = 'Bob (12, M)';
	// console.log(peeps[i].children);
}

//#2

for(var i = 0; i < peeps.length; i++){
	peeps[i].age += 5;
	// console.log(peeps[i].age);
}

//#3

var i = 0;
var agesum = 0;

while(i < peeps.length){
	agesum += peeps[i].age;
	i++;
}

var avg = agesum/peeps.length;
console.log(avg);

//#4

for(var i = 0; i < peeps.length; i++){
	for(var j =0; j < peeps[i].children.length; j++){
		console.log(peeps[i].children[j]);
	}
}

//#5

var msum = 0;
var mnum = 0
var fsum = 0;
var fnum = 0;

for(var i = 0; i < peeps.length; i++){
	for(var j =0; j < peeps[i].children.length; j++){
		var sage = peeps[i].children[j].split(" ")[1];
		var age = parseInt(sage.slice(1, -1));
		// console.log(age);
		var gender = peeps[i].children[j].split(" ")[2];
		gender = gender.slice(0, gender.length-1);
		// console.log(gender);

		if(gender === 'M'){
			msum += age;
			mnum++;
		} else {
			if(age < 12){
				fsum += age;
				fnum ++;
			}
		}
	}
}

var mavg = msum/mnum;
var favg = fsum/fnum;

console.log(mavg);
console.log(favg);