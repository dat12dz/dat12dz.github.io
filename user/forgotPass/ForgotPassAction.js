fetch(InternalApiServerIP + '/forgotPass',{method: 'POST',body: 
{email,newpassword}}).then(
    res=> {
        res.json().then(json=>{
            if (json.status > 0)
          writeToPopup("Fail",json.message);
          else
          {
                writeToPopup("Sucess","Please read your email we sent to you to get the link")
          }
        });
});