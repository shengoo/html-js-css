function makePromise(month){
    var promise = new Promise((resolve,reject) => {
        // console.log(val,month)
        // resolve(val.push(month));
        resolve({month:month})
    });

    return Promise.resolve({month:month}).then(check1).then(check2).then(checkPromise);
}

function check1(status){
    if(status.done)
        return status;
    if(status.month == 2){
        result.push(status.month);
        status.done = true;
        return status
    }
    return status;
}

function check2(status){
    if(status.done)
        return status;
    if(status.month == 3){
        result.push(status.month);
        status.done = true;
        return status
    }
    return status;
}

function checkPromise(status){console.log(status)
    if(status.done)
        return status;
    var promise = new Promise(resolve=>{
        if(status.month == 4){
            result.push(status.month);
            status.done = true;
        }
        return resolve(status);
    });
    
    return promise;
}

var months = [1,2,3,4,5],
    result = [];

var promises = [];

for (var i = 0; i < months.length; i++) {
    const month = months[i];
    promises.push(() => makePromise(month));
}
promises.reduce((p, c) => {
    return p.then(c)
}, Promise.resolve()).then((val) => {
    // resolve();
    console.log(result)
}).catch(reason => {
    // reject(reason);
    console.log(reason)
});