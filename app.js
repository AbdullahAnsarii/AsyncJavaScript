let getTodos = link => {
    return new Promise((resolve, reject)=>{
        let request = new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{   
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('error getting data');
            }
            
        })
        request.open('GET', link);
        request.send();
    })
    
}
getTodos('files/test1.json').then(data=>{
    console.log("promise 1 resolved: ",data);
    return getTodos('files/test2.json')
}).then(data=>{
    console.log("promise 2 resolved: ",data);
    return getTodos('files/test3.json')
}).then(data => {
    console.log("promise 3 resolved: ",data);
}).catch(err => {
    console.log("promise rejected: ", err);
})
//ignore below
// getTodos('files/test.json',(err, data)=>{
//     console.log(data)
//     getTodos('files/test2.json',(err, data)=>{
//         console.log(data)
//         getTodos('files/test3.json',(err, data)=>{
//             console.log(data)
//         } );
//     } );
// } );

// let promisePactice = ()=>{
//     return new Promise((resolve, reject)=>{
//         resolve('some data');
//         reject('some error');
//     });
// }

// promisePactice().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })