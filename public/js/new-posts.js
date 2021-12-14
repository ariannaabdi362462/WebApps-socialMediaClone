
function callApi(data) {
    let url="/api/posts" 
    let options = {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            //pass the user token through the headers
            "X-API-Token": window.sessionStorage.getItem('token')
        },
        body:JSON.stringify(data)
    } 

    let form = document.getElementById("postForm")
    let title =  document.getElementById("title")
    let body = document.getElementById("body")
}    

postForm.addEventListener("submit", (event) => { 
	event.preventDefault();      // stop
})

function apiGetRequest(url){
    return fetch(url).then(
        response => response.json()
    )
}

    let formData = new FormData(postForm)
    let title  = formData.get("title")
    let body = formData.get("body")    //send to api

    let data = {
    title: title,
    body: body,
   
 }

 //data response
//  callApi(data).then(response => { 
//     console.log(response)

//})
    
        let form = document.getElementById('newPost')

        function formSubmitHandler(form) {
            fetch('/api/posts', {
                method: "POST",
                body: new FormData(form)
            })
        }
    