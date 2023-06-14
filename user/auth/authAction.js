var pathSplited = window.location.pathname.split();
var guid = new URLSearchParams(window.location.search).get("uuid")
var messageContainer = document.getElementById('message');
fetch(InternalApiServerIP + '/auth/' + guid).then(res => {
    res.json().then(json => {
        // when fetch complete
        if (json.status == false)
        messageContainer.textContent = json.reason;
        else
        {
            messageContainer.textContent = "Verify Sucessful";
        }
    })
    
}).catch(e=> {
    messageContainer.textContent = "Fail to connect to server";
});