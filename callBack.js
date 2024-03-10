const getData=(dataId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            resolve('success');
        },3000);
    })
}

//callback Hell
// getData(1,()=>{
//     console.log('getting data of 3');
//     getData(3,()=>{
//         console.log('getting data of 4');
//         getData(4,()=>{
//             console.log('getting data of 5');
//             getData(5);
//         })
//     });
// });
// //promise
// getData(1).then((res)=>{
//     console.log("data 2 fetching...");
//  return getData(2);
// }).then((res)=>{
//     console.log("data 3 fetching...");
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// });
// //async await
// async function getDataAll(){
//     console.log('getting Data1...');
//     await getData(1);
//     console.log('getting Data2...');
//     await getData(2);
//     console.log('getting Data3...');
//     await getData(3);
//     console.log('getting Data4...');
//     await getData(4);
//     console.log('getting Data5...');
//     await getData(5);
//     console.log('getting Data6...');
//     await getData(6);
// }
//IIFE immidetely invoke function expresion symbol=> (whithout nameing function)()
(async function (){
    console.log('getting Data1...');
    await getData(1);
    console.log('getting Data2...');
    await getData(2);
    console.log('getting Data3...');
    await getData(3);
    
})();
