// //async function
// async function getData (){
//     setTimeout(function() {
//         console.log("Hello satyam")
        
//     }, 4000);

// }
//     getData();






//fetch api
async function getData(){

//get
    let response =await fetch('https://jsonplaceholder.typicode.com//comments?postId=1');
    let data = await response.json();
    console.log (data);

}
getData();