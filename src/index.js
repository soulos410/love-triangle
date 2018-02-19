
module.exports = function getLoveTrianglesCount(preferences = []) {
let counter = 0;
preferences.unshift(0);

for(let i = 1; i < preferences.length; i++){
	let firstIndex = preferences[i];
	let secondIndex = preferences[firstIndex];
	let thirdIndex = preferences[secondIndex];
	if(preferences[i] === 0 || preferences[firstIndex] === preferences[secondIndex]) { continue;}
	if(i === thirdIndex){
		counter++;
		preferences[firstIndex] = 0;
		preferences[secondIndex] = 0;
		preferences[thirdIndex] = 0;		
	}
}
	return counter;
}