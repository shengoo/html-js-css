function fun(){
  // console.log("fun : ",arguments);
  console.log(this.x);
}

fun(1,2,3);

fun.call(undefined,1,2,3)
fun.apply(this,[1,2])