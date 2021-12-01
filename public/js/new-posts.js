

function callApi(data) {
let url="/api/posts" 
let options = {
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}



return fetch(url,options).then(response => response.json()
)}

let form = document.getElementById("postForm");
let title =  document.getElementById("title");
let body = document.getElementById("body");


postForm.addEventListener("submit", (event) => { 
	event.preventDefault();      // stop the sumbit button

//gets url 
function apiGetRequest(url){
    return fetch(url).then(
        response => response.json()
    )
}


let formData = new FormData(postForm);
let title  = formData.get("title");
let body = formData.get("body");     //send to api

    let data = {
    title: title,
    body: body,
   
 }

//data response
 callApi(data).then(response => { 
     console.log(response);
//     if(response) {  //login
 
//         window.location = 'http://localhost:3000/new-posts.html' //login succesful 
//     }
//     else{
//         //output error message 
//         LoginError.insertAdjacentHTML("beforeend","<p>username or password is invalid</p>");
//     }
})

})