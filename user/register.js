ServerIp = InternalApiServerIP + '/register'
function Register(username,email,password)
{
    var MessStack = "";
    if (password.length < 8) 
    {
        MessStack += "Password need to have at least 8 charecters \n";

    }
    if (username.length < 6)
    {
        MessStack += "Username need to have at least 6 charecters \n"; 
    }
    if (email.length < 2 || !email.includes('@'))
    {
        MessStack += "Email not valid \n"; 
    }

    if (MessStack == "")
    fetch(ServerIp,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,email,password})
    }).then(res => {
        res.json().then(json=> {
            // request sucess
            switch(json.status)
            {
                case 0:
                    writeToPopup("Register complete",'Please check your mail to verify your account.You have 3 mins to verify your account');
                    break;
                    case 1:
                        writeToPopup('Failed to register','Your username have been used');
                        break;
                 case 2:
                  writeToPopup('Failed to register','Your email have been used');
                     break;
            }
        })
    }).catch((e)=>{
        if (e == "TypeError: Failed to fetch") writeToPopup("Fail to connect","Server is closed or unable to connect"); else
        writeToPopup("Fail to login",e);
    });
    if (MessStack != "")
    writeToPopup("Please check the info form again",MessStack);
}
let LoginBtn = document.getElementById("SendRegInfo");
console.log(LoginBtn);
var Username = document.getElementById("Username");
var email = document.getElementById("email");
var Password = document.getElementById("Password");
LoginBtn.addEventListener('click',()=>  Register(Username.value,email.value,Password.value));
window.addEventListener('keydown',e => {
    if (e.key == 'enter')
    {
        Register(Username.value,email.value,Password.value);
    }
 })