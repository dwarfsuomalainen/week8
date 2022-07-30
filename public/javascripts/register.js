if (document.readyState !== "loading") {
  initializeCodeRegister();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCodeRegister();
  });
}

function initializeCodeRegister() {
  //document.getElementById("login-form").addEventListener("submit", onSubmit);
  handleErrorParam();
}

const errors = {
  password: "Password is not strong enough",
  exists: "Email already in use",
};

function handleErrorParam() {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("error");

  if (error && errors[error]) {
    const errorContainer = document.getElementById("error");
    errorContainer.classList.add('card-panel');
    errorContainer.innerText = errors[error];
  }
}

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  console.log(Object.fromEntries(formData.entries()));
  fetch("/api/user/register", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData.entries())),
    headers: { ["Content-Type"]: "application/json" },
  }).then((response) => {
    if (response.ok) {
      window.location.href = "/login.html";
    } else {
      document.getElementById("error").innerHTML = "O I N K !!!";
    }
  });
}
