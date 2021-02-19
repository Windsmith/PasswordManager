// SHOW PASSWORD FUNCTIONALITY
var password_show = document.getElementById('showpass');

password_show.addEventListener("click", showpass)

function showpass(){
    var password_field = document.getElementById('password');

    if (password_show.checked == true){
        password_field.type = "text";
    }
    else {
        password_field.type = "password";
    }
}
