var i = 0;
LocationList.forEach(element => {
    document.getElementById("location").innerHTML += "<a href =" +document.location.origin + "/search.html?l=" + i + ">" +element;
    i++
});