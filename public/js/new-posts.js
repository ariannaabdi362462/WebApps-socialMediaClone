
function callApi(form) {
    let url="/api/post" 
    let options = {
        method: "POST",
      //  headers:{
           // "Content-Type":"application/json",
            //pass the user token through the headers
        //    "X-API-Token": window.sessionStorage.getItem('token')
    //    },
        body: new FormData(form)
    } 
fetch(url, options)
 //   let form = document.getElementById("postForm")
  //  let title =  document.getElementById("title")
  //  let body = document.getElementById("body")
}    

postForm.addEventListener("submit", (event) => { 
	event.preventDefault();      // stop
    let form = document.getElementById("postForm")
    callApi(form)
    console.log('buttonclicked')
})

function apiGetRequest(url){
    return fetch(url).then(
        response => response.json()
    )
}

    let formData = new FormData(postForm)
    let title  = formData.get("title")
    let body = formData.get("body")    //send to api

    let form = document.getElementById('newPost')

    let data = {
    title: title,
    body: body,
   
 }

 
 //data response
//  callApi(data).then(response => { 
//     console.log(response)

//})
    
    

      
    