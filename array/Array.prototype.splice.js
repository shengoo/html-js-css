var a = ["angel", "clown", "mandarin", "surgeon"];
a.splice(2, 0, "drum")
console.log(a); 

var todos = [
            {
                id:1,
                title: 'one',
                done: false
            }, {
                id:2,
                title: 'a todo item',
                done: false
            }, {
                id:3,
                title: '2 done item',
                done: true
            }
        ];
        todos.splice(1,1);
        console.log(todos)