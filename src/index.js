
module.exports = function getLoveTrianglesCount(preferences = []) {
let counter = 0;
preferences.unshift(0);

for(let i = 1; i < preferences.length; ){
	let first_index = preferences[i];
	let second_index = preferences[first_index];
	let third_index = preferences[second_index];
	if(i === third_index){
		counter++;		
	}
	i+=3;

}
	return counter;
}
//getLoveTrianglesCount([2,3,1,5,6,4]);