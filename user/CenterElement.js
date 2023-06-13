function centerElement(element) {
    var elementHeight = element.offsetHeight;
    var elementWidth = element.offsetWidth;

    // Set the element's top and left positions


    // Adjust the position using negative margins
    element.style.marginTop = window.innerHeight/2 - elementHeight/2 + 'px';
    element.style.marginLeft = innerWidth/2 - elementWidth/2 +'px';
  }
