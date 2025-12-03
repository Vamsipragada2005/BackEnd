// function getUserDetails(id){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userroll:"678"})
//     }, 2000)
//    }) 
// };

// const myfun = async() =>{
//     console.log("123")
//     const result = await getUserDetails("123");
//     console.log(result);
//     console.log("456")
// };


const getdata = async () => {
    const result = await fetch("https://randomuser.me/api/");
    const data = await result.json();
    console.log(data);
}

getdata();
