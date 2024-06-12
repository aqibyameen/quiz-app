const local= JSON.parse(localStorage.getItem("user"));

let arr;
if (local!=null) {
    arr=local;
}
else{
    arr=[];
    
}
const signUp=(e)=>{
    console.log(e)
    e.preventDefault();

    let name=document.querySelector(".name").value;
    let email=document.querySelector(".email").value;
    let password=document.querySelector(".password").value;
    let confirmPass=document.querySelector(".confirm").value;
    let error=document.querySelector(".error");

     if (name=="") {
        error.innerHTML="Name is required"
        return; 
    }
     else if (email=="") {
        error.innerHTML="Email is required"
        return; 
    }
     else if (password=="") {
        error.innerHTML="Password is required"
        return; 
    }
    else if(password.length<8){
        error.innerHTML ="Password should be atleast 8 characters"
        return; 
    }
     else if (confirmPass=="") {
        error.innerHTML="Confirm password is required"
        return; 
    }
     else if(password!=confirmPass){
        error.innerHTML ="Password and Confirm Should be same"
        return; 
    }
    
    
    error.innerHTML='';


    arr.push(...arr,{name:name,email:email,password:password});
    localStorage.setItem("user",JSON.stringify(arr));
    console.log(arr);
    alert("User has been registered")
    window.location.href="index.html";
}
const signup=document.querySelector(".signup");
signup.addEventListener('click',(e)=>(signUp(e)));
