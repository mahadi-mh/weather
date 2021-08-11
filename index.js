let loginButton = document.getElementById("login");
let homePage = document.getElementById("homePage");

const userName = ["sifat", "papon", "mahadi"];

loginButton.addEventListener("click", function () {
    let nameInput = document.getElementById("name");
    let passwordInput = document.getElementById("password");

    let userExist = false;

    for (let i = 0; i < 3; i++) {
        if (nameInput.value == userName[i]) {
            if (passwordInput.value == "123") {
                userExist = true;
                break;
            }
        }
    }

    if (userExist) {
        login();
    } else {
        alert("username or password is incorrect");
    }
})

function login() {
    location.href = "weather.html";
}