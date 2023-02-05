//login
function go(){
    let login = "admin";
    let password = "admin";
    if (document.form.password.value==password && document.form.login.value==login){
        window.location="./pages/admin.html"
    } else {
        alert("Usuario y/o contraeña invalidos")
    }
}