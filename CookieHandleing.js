var NameDisplay = document.getElementById('UsernameOrLogin');
var LogOutBtn = document.getElementById('LogOutOrRegister');

var Cookies = splitedCookie();

if (Cookies['username'] != undefined && Cookies['username'] != null)
{//if cookie have value in it
    LogOutBtn.textContent = "Đăng xuất";
    LogOutBtn.onclick = () => {
        removeAllCookies();
        window.location.href = "/user/login" };
    NameDisplay.textContent = Cookies['username'];
    NameDisplay.onclick = null;
    
}
function splitedCookie()
{
var res = {}
   var Splited = document.cookie.split(";");
   Splited.forEach((a,i)=>{
        var temp = a.trim().split('=');
        
        res[temp[0]] = temp[1];
   });
   return res;
}
function removeAllCookies() {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }
  

  