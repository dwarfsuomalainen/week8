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
  console.log(formData);
  console.log(Object.fromEntries(formData.entries()))
  fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: {["Content-Type"]: "application/json"}
  })  
      .then((response) => {
        if (response.ok) {
          window.location.href="/login.html";
      }  else {
          document.getElementById("error").innerHTML = "O I N K !!!";
      }
              
          }) 
}

