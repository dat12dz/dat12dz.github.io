ServerIp = InternalApiServerIP + '/register'
function Register(username,email,password)
{
    if (password.length < 8) 
    {
        writeToPopup("Please check your password again","Password need to have at least 8 charectors");
        return;
    }

    fetch(ServerIp,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(username,email,password)
    }).catch((e)=>{
        if (e == "TypeError: Failed to fetch") writeToPopup("Fail to connect","Server is closed or unable to connect"); else
        writeToPopup("Fail to login",e);
    });
}
let LoginBtn = document.getElementById("SendRegInfo");
console.log(LoginBtn);
var Username = document.getElementById("Username");
var email = document.getElementById("email");
var Password = document.getElementById("Password");

var RegBtn  = document
LoginBtn.addEventListener('click',()=>  Register(Username.textContent,email.textContent,Password.textContent));
