// Create the popup elements
// Create the link element


var popup = document.createElement('div');
popup.className = 'popup';

var popupContent = document.createElement('div');
popupContent.className = 'popup-content';

var closeButton = document.createElement('span');
closeButton.className = 'close';
closeButton.innerHTML = '&times;';

var heading = document.createElement('h2');
heading.innerHTML = 'Hello, Popup!';
heading.className = 'heading'
var paragraph = document.createElement('p');
paragraph.innerHTML = 'This is a popup example.';

// Append elements to the popup container
popupContent.appendChild(closeButton);
popupContent.appendChild(heading);
popupContent.appendChild(paragraph);
popup.appendChild(popupContent);

// Append the popup to the document body
document.body.appendChild(popup);

// Styling for the popup
popup.style.display = 'none';
popup.style.position = 'fixed';
popup.style.top = '10%';
popup.style.left = '50%';

popup.style.transform = 'translate(-50%, -50%)';
popup.style.width = '300px';
popup.style.padding = '20px';
popup.style.backgroundColor = '#f1f1f1';
popup.style.border = '1px solid #ccc';
popup.style.borderRadius = '4px';

popup.style.zIndex = '9999';

closeButton.style.float = 'right';
closeButton.style.fontWeight = 'bold';
closeButton.style.cursor = 'pointer';

// Function to open the popup
function openPopup() {
  popup.style.display = 'block';
}
function writeToPopup(head,str) {
    heading.innerHTML = head;
    paragraph.innerHTML = str;
    openPopup();
  }
  
// Function to close the popup
function closePopup() {
  popup.style.display = 'none';
}

// Example usage

closeButton.addEventListener('click', closePopup);

setTimeout(closePopup, 3000); // Cl
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href =  window.location.origin + '/Popup.css';

// Append the link element to the head section
document.head.appendChild(link);