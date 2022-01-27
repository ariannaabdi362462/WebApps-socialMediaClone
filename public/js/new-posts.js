
function callApi(form) {
    let url="/api/post" 
    let options = {
        method: "POST",
       headers:{
           "Content-Type":"application/json",
        
           "X-API-Token": window.sessionStorage.getItem('token')
       },
        body: new FormData(form)
    } 
fetch(url, options)

}    

postForm.addEventListener("submit", (event) => { 
	event.preventDefault();      // stop
    let form = document.getElementById("postForm")
    callApi(form)
    console.log('buttonclicked')
})



    let formData = new FormData(postForm)
    let title  = formData.get("title")
    let body = formData.get("body")    //send to api

    let form = document.getElementById('newPost')

    let data = {
    title: title,
    body: body,
   
 }

 

      
    