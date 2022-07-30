if (document.readyState !== "loading") {
    initializeCodeIndex();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCodeIndex();
    });
  }
  
  function initializeCodeIndex() {
    fetch ("/api/private"), {
        credentials: 'include',
        headers: {
          'Authorization': 'Bearer TOKEN'
        }
      }
}


function onSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    fetch("/api/user/login", {
        method: "POST",
        body: formData
    })  
    
        .then((response) => response.json())
        .then((data) => {
            if(data.token) {
                storeToken(data.token);
                window.location.href="/";
            } else {
                if (data.message) {
                    document.getElementById("error").innerHTML = data.message;
                }  else {
                    document.getElementById("error").innerHTML = "Very strange error!";
                }
            }

        })

}

function storeToken(token) {
    localStorage.setItem("auth_token", token);
}
