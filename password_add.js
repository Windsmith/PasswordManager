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

// GENERATE PASSWORD FUNCTIONALITY
var generate_password_button = document.getElementById('generatepassword');
generate_password_button.addEventListener('click', insert_random_password);

function insert_random_password(){
    var random_password = make_random_password();

    var password_field = document.getElementById('password');
    password_field.value = random_password;
}

function make_random_password(){
    password_array = [];

    charactors = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    symbols = '!#$^%&*()><?/}][{;":`~=_-+';
    numbers = '0123456789';
    
    for (var i = 0; i < 10; i++){
        password_array.push(charactors.charAt(Math.floor(Math.random() * charactors.length)));

        if (i < 5){
            password_array.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
            password_array.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
        }
    }

    return shuffle(password_array).join('')
}

function shuffle(password_array){
    for(var i = password_array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = password_array[i];
        password_array[i] = password_array[j];
        password_array[j] = temp;
    }
    return password_array
}