function validate(){
    var name = document.stud_form.name;
    var mobile = document.stud_form.mobile;
    var email = document.stud_form.email;
    var gender = document.stud_form.gender;
    var course = document.stud_form.course;
    var program = document.stud_form.program;

    if (name.value.length<=0){
        alert("Name is required!")
        name.focus()
        return false;
    }
    
    if (mobile.value.length<=0){
        alert("Mobile is required!")
        mobile.focus()
        return false;
    }
    
    if (email.value.length<=0){
        alert("Email is required!")
        email.focus()
        return false;
    }
    if (gender.value.length<=0){
        alert("Gender is required!")
        gender.focus()
        return false;
    }
    if (course.value=="Select"){
        alert("Course is required!")
        course.focus()
        return false;
    }
    var check = false;
    for(var i = program.length-1; i>=0; i--){
        if(program[i].checked){
            check=true; 
        }
    }
    if(check==false){
        alert("Program is required!")
        return false;
    }
}

function validateString(id){
    var element = document.getElementById(id);
    var regExp=/^[a-zA-Z]+$/;
    if(!regExp.test(element.value)){
        alert("Enter String value")
        return false;
    }
}
function validateEmail(id){
    var element = document.getElementById(id);
    var regExp=/^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2-4}$/;
    if(!regExp.test(element.value)){
        alert("Enter valid email")
        return false;
    }
}