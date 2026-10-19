window.onload = pageLoad;
function pageLoad(){
	
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    //Gender need to check using name
    var genders = document.getElementsByName("gender")
    var bday = document.getElementById("bday").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;

    var errorMessage = "";

    //เช็คค่าว่าง
    if (firstName==='' || firstName === undefined){
        errorMessage += "First name is required <br>";
    }

    if (lastName==='' || lastName === undefined){
        errorMessage += "Last name is required  <br>";
    }

    var genderChecked = false;
    for(var i = 0; i < genders.length; i++) {
        if(genders[i].checked) {
            genderChecked = true;
            break;
        }
    }
    if (!genderChecked){
        errorMessage += "Gender is required  <br>";
    }

    if (bday==='' || bday === undefined){
        errorMessage += "Bday is required  <br>";
    }

    if (email==='' || email === undefined){
        errorMessage += "Email is required  <br>";
    }

    if (username==='' || username === undefined){
        errorMessage += "Username is required  <br>";
    }

    if (password==='' || password === undefined){
        errorMessage += "Password is required  <br>";
    }

    if (repassword==='' || password === undefined){
        errorMessage += "Repassword is required  <br>";
    }

    //เช็ครหัสผ่านไม่ตรง
    if (password !== repassword){
        errorMessage += "Passwords do not match  <br>";
    }

    if (errorMessage){
        document.getElementById("errormsg").innerHTML = errorMessage;
        return false;
    }
    return true;
}