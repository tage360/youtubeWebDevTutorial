// pice of code that dose one or more actions

function go(name, age){
	if (age < 20){
		return name + '!';
	} else {
		return name;
	}
}

function add(first, second){
	return first + second;
}

alert(go('will', 19));
//alert(add(2,3));