ServerIp = InternalApiServerIP + '/login'
function Register(username,email,password)
{
    fetch(ServerIp,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(username,email,password)
    }).catch((e)=>{
        writeToPopup("Fail to register",e);
    });
}
let LoginBtn = document.getElementById("SendRegInfo");
console.log(LoginBtn);
var Username = document.getElementById("Username");
var email = document.getElementById("email");
var Password = document.getElementById("Password");

var RegBtn  = document
LoginBtn.addEventListener('click',()=>  Register(Username.textContent,Password.textContent));
