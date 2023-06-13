ServerIp = InternalApiServerIP + '/login'
function Login(username,password)
{
    fetch(ServerIp,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(username,password)
    }).catch((e)=> {
        writeToPopup("Fail to login",e);
    });
}
let LoginBtn = document.getElementById("SendLoginInfo");
console.log(LoginBtn);
var Username = document.getElementById("Username");
var Password = document.getElementById("Password");
LoginBtn.addEventListener('click',()=>  Login(Username.textContent,Password.textContent));
