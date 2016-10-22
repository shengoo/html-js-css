var data = [1,2,3];

function fun(){
	console.log('fun');
}

export default 'default expression';
export{data};
export function fun(){
	console.log('fun');
};

console.log('modules')