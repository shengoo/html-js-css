var tree = {
  value: 'A',
  left: {
  	value: 'B',
  	left: {
  		value: 'D',
  		left: null,
  		right: null,
  	},
  	right: {
  		value: 'E',
      left: null,
      right: null
    }
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: null,
      right: null
    },
    right: {
      value: 'G',
      left: null,
      right: null
    }
  }
}



function reverse(tree){
  if(!tree){
    return null;
  }
  if(tree.left && tree.right){
    var temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
  }
  tree.left = reverse(tree.left);
  tree.right = reverse(tree.right);
  return tree;
}

// console.log(reverse(tree))
// 
// 

var a = {
  value: 2,
  next: {
    value: 3,
    next: {
      value: 4,
      next: {
        value: 6,
        next: null
      }
    }
  }
};
var b = {
  value: 1,
  next: {
    value: 4,
    next: {
      value: 6,
      next: null
    }
  }
};


function find(){
  var currentA = a;
  while(currentA.next){
    var currentB = b;
    while(currentB.next){
      if(currentA.value !== currentB.value){
        currentB = currentB.next;
      }else{
        console.log(currentB.value);
        break;
      }
    }
    currentA = currentA.next;
  }
}
find();