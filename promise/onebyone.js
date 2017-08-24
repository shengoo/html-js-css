function waitPromise(time) {
    console.log(time);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');
        }, time);
    });
}

function log(data) {
    return new Promise((resolve, reject) => {
        console.log(data + '@' + (new Date().getSeconds()));
        resolve();
    });
}

var ps = [];
for (var i = 0; i < 3; i++) {
    let time = (i + 1) * 1000;
    ps.push(() => waitPromise(time));
    ps.push(log);
}


console.log('started' + '@' + (new Date().getSeconds()));
var p = Promise.resolve();
ps.reduce((p, c) => {
    return p.then(c);
    // use reduce to generate a.then(b).then(c)...
}, p).then(() => {
    console.log('all finished');
}).catch(reject => {
    console.log('reject', reject)
});
