var amanda = {
	fn: 'Amanda',
	ln: 'Harris',
	age: 42,
	gender: 'f',
	children: [
		{
			name: 'Ben',
			age: 18,
			gender: 'M'
		},
		{
			name: 'Lisa',
			age: 15,
			gender: 'F'
		} ]
}

var brian = {
	fn: 'Brian',
	ln: 'Hall',
	age: 36,
	gender: 'm',
	children: [
		{
			name: 'Eric',
			age: 11,
			gender: 'F'
		},
		{
			name: 'Jenny',
			age: 8,
			gender: 'F'
		} ]
}

var terrence = {
	fn: 'Terrence',
	ln: 'Smith',
	age: 49,
	gender: 'm',
	children: [
		{
			name: 'David',
			age: 17,
			gender: 'M'
		},
		{
			name: 'Alex',
			age: 23,
			gender: 'F'
		},
		{
			name: 'Joe',
			age: 25,
			gender: 'M'
		} ]
}

var alyssa = {
	fn: 'Alyssa',
	ln: 'Ingram',
	age: 28,
	gender: 'f',
	children: [
		{
			name: 'Jamie',
			age: 3,
			gender: 'F'
		},
		{
			name: 'Lori',
			age: 2,
			gender: 'F'
		} ]
}

//#1

var peeps = [amanda, brian, terrence, alyssa];

for(var i = 0; i < peeps.length; i++){
	peeps[i].children[peeps[i].children.length] = {
		name: 'Bob',
		age: 12,
		gender: 'M'
	};
	console.log(peeps[i].children);
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
		var child = peeps[i].children[j]
		console.log(child.name + " (" + child.age + ", " + child.gender + ")");
	}
}

// #5

var msum = 0;
var mnum = 0
var fsum = 0;
var fnum = 0;

for(var i = 0; i < peeps.length; i++){
	for(var j =0; j < peeps[i].children.length; j++){
		var child = peeps[i].children[j];
		var age = child.age;
		// console.log(age);
		var gender = child.gender;
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