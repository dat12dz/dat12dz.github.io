ServerIp = InternalApiServerIP + '/login'
async function Login(username,password)
{
  return await fetch(ServerIp,{
        method:'POST',
        
        headers:{
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify({ username,password })
    }).then((res)=>{
  
        document.cookie = "";
        res.json().then(json  => {
          if ( res.status < 300)
          {
            // Login sucessful
            document.cookie = "acc="+ j.cookie + "path=/; domain=" + window.location.hostname;   
            document.cookie = "username="+ username + ";path=/; domain=" + window.location.hostname; 
            console.log(document.cookie);
              window.location.href = window.location.origin + "/index";
          }
          else
          {
            if (json.status == 3) writeToPopup("Fail to login","This account has not been verified. Please check your email");
            else
             // Login fail
             writeToPopup("Fail to login","Password wrong or username not found");
          }
        });
      
    }).catch((e)=> {
        if (e == "TypeError: Failed to fetch") writeToPopup("Fail to connect","Server is closed or unable to connect"); else
        writeToPopup("Fail to login",e);
        
    });
}
let LoginBtn = document.getElementById("SendLoginInfo");
console.log(LoginBtn);
var Username = document.getElementById("Username");
var Password = document.getElementById("Password");
LoginBtn.addEventListener('click',()=>  Login(Username.value,Password.value));
