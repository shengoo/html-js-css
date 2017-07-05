const Greeters = []
for (var i = 0; i < 10; i++) {
    Greeters.push(function () {
        return console.log(i)
    });
}
Greeters[0]() // 10
Greeters[1]() // 10
Greeters[2]() // 10


// 1. var -> let
// 2. console.log.bind(null,i)