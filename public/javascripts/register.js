if (document.readyState !== "loading") {
    initializeCodeRegister();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCodeRegister();
    });
  }

    function initializeCodeRegister() {
      let form2 = document.getElementById("login-form").addEventListener("submit", onSubmit);
      //console.log(form2);
  }


function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  fetch("/api/user/register", {
      method: "POST",
      body: formData
  })  
      .then(() => {
              window.location.href="/login.html";
          })
          .catch( () => { document.getElementById("error").innerHTML = "O I N K !!!";} 
            ) 
}

