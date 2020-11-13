

function valid(form){
    let fail = false;
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let rePassword = form.rePassword.value;
    let state = form.state.value;
    let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    if(name === "" || name === " "){
        fail = "вы не ввели свое имя"
    } else if(adr_pattern.test(email) === false){
        fail = "вы ввели свое email неправильно";
     } else if(password === ""){
        fail = "вы не ввели пароль"
    } else if(password !== rePassword){
        fail = "Пароли не совпадают"
    } else if(state === ""){
        fail = "Укажите пол";
    }
    if(fail){
        alert(fail);
    } else {
        window.location = "http://google.com"
    }

}