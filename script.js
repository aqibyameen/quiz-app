
 
const login = (e)=>{
    e.preventDefault();
    console.log("login");
    let arr=JSON.parse(localStorage.getItem("user"));
    let name=document.querySelector(".name").value;
    let password=document.querySelector(".password").value;
    let error=document.querySelector(".error");
    error.innerHTML='';
    if (arr==null) {
        error.innerHTML=`User not found register first`
        return;
    }
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].name==name && arr[index].password==password) {
            alert("User login successful")
         window.location="quiz.html"
            return;
        }
        else if (arr[index].name==name && arr[index].password!=password) {
        error.innerHTML=`Invalid password`
        return ;
    }
}
console.log("user not exist")
error.innerHTML=`User not found register first`

}
 

const loginn=document.querySelector(".login");
loginn.addEventListener('click',(e)=>(login(e)));
