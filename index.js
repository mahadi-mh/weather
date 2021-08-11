let loginButton = document.getElementById("login");
let homePage = document.getElementById("homePage");

loginButton.addEventListener("click", function(){
    let loginForm = document.getElementById("login-form");
    loginForm.style.display = "none";

    homePage.style.display = "block";
})